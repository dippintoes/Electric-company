import mongoose, { FilterQuery, UpdateQuery, mongo } from "mongoose";
import { IBill } from "./bill.types";
import billRepo from "./bill.repo";
import { BILL_RESPONSES } from "./bill.responses";
import userRepo from "../users/user.repo";
import meterServices from "../meter/meter.services";
import { Status } from "../status/status.types";

const create = (bill: IBill) => {
    if (bill.client_id) bill.client_id = new mongoose.mongo.ObjectId(bill.client_id);
    const newBill = billRepo.create(bill);
    return newBill;
}
const findBill = async (filter: FilterQuery<IBill>) => {
    const foundBill = await billRepo.findBill(filter);
    if (!foundBill) throw BILL_RESPONSES.BILL_NOT_FOUND;
    return foundBill;
}

const findAll = async (filter: FilterQuery<IBill>) => {
    const foundedBills = await billRepo.findAll({ ...filter, isDeleted: false });
    if (!foundedBills) throw BILL_RESPONSES.NO_BILLS;
    return foundedBills;
}

const findSpecificBill = async (filter: FilterQuery<IBill>) => {
    const foundedBills = await billRepo.findSpecificBill(filter);
    if (!foundedBills) throw BILL_RESPONSES.NO_BILLS;
    return foundedBills;
}

const updateBill = async (id: string, update: UpdateQuery<IBill>) => {
    const updatedBill = await billRepo.updateBill(id, update);
    return updatedBill;
}

const takeReading = async (id: string, files: any, bill: IBill) => {
    const client = await userRepo.findOne({ _id: new mongoose.mongo.ObjectId(bill.client_id) })
    const MeterType = await meterServices.findOne({ _id: new mongoose.mongo.ObjectId(client?.meterType) });
    if (!MeterType) throw { message: "Client does not have assigned meter", statusCode: 400 };
    else if ((client?.emp_id)?.toString() === id) {
        const rpu_reading = bill.reading * MeterType.rpu;
        bill.currentBill = rpu_reading;
        files.forEach((img: any) => {
            bill.pics.push(img.name);
        })
        console.log(bill.pics)
        bill.payment_status = Status.Pending;
        const exists = await billRepo.findSpecificBill(new mongoose.mongo.ObjectId(bill.client_id));
        console.log(exists);
        if (exists.length != 0) {
            if (exists[0].payment_status.toString() === Status.Pending.toString()) {
                bill.outStandingBill = exists[0].outStandingBill + bill.currentBill;
                bill.totalBill = bill.currentBill + bill.outStandingBill;
            }
        }
        else {
            bill.outStandingBill = 0;
            bill.totalBill = bill.currentBill;
        }
        await userRepo.updateOne(bill.client_id.toString(), { bill: bill.totalBill });
        const newBill = await billRepo.create(bill);
        await userRepo.updateOne(id, { bill: bill.totalBill });
        return newBill;
    }
    else {
        throw { message: "UnAuthorized access", statusCode: 401 };
    }

}

const updateStatus = async (client_id: string) => {
    const bill = await billRepo.findAll({ client_id: new mongoose.mongo.ObjectId(client_id) });
    console.log(bill);
    if (bill.length == 0) {
        throw BILL_RESPONSES.NO_OUTSTANDING_BILL;
    }
    else if (bill[bill.length - 1].payment_status.toString() === Status.Paid.toString()) {
        throw BILL_RESPONSES.ALREADY_PAID;
    }
    else {
        bill.forEach((item) => billRepo.updateBill(item._id.toString(), { payment_status: Status.Paid, outStandingBill: 0 }));
    }
    console.log(bill);
    if (!bill) throw BILL_RESPONSES.BILL_NOT_FOUND;
    return bill;
};

const outStandingRevenue = async () => {
    console.log("start");
    const outStandingBills = await billRepo.findAll({ outStandingBill: { $gt: 0 }, isDeleted: false });
    console.log(outStandingBills);
    const amount = outStandingBills.reduce((a, c) => a + c.outStandingBill, 0);
    return { "Total OutStanding Revenue": amount };
}

const deleteBill = async (filter: FilterQuery<IBill>, update: UpdateQuery<IBill>) => {
    const deletedBill = await billRepo.deleteBill(filter, update);
    return deleteBill;
}

export default {
    create,
    findBill,
    findAll,
    findSpecificBill,
    updateBill,
    takeReading,
    updateStatus,
    outStandingRevenue,
    deleteBill
}