import mongoose, { FilterQuery, UpdateQuery, mongo } from "mongoose";
import { IBill } from "./bill.types";
import billRepo from "./bill.repo";
import { BILL_RESPONSES } from "./bill.responses";

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
    const foundedBills = await billRepo.findAll(filter);
    if (!foundedBills) throw BILL_RESPONSES.NO_BILLS;
    return foundedBills;
}

const findSpecificBill = async (filter: FilterQuery<IBill>) => {
    const foundedBills = await billRepo.findSpecificBill(filter);
    if (!foundedBills) throw BILL_RESPONSES.NO_BILLS;
    return foundedBills;
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
    deleteBill
}