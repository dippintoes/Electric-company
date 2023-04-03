import mongoose, { FilterQuery, UpdateQuery, mongo } from "mongoose";
import { BillModel } from "./bill.schema";
import { IBill } from "./bill.types";

const create = (bill: IBill) => BillModel.create(bill);

const findBill = async (filter: FilterQuery<IBill>) => await BillModel.findOne(filter);

const findAll = async (filter: FilterQuery<IBill>) => await BillModel.find(filter);

const findSpecificBill = async (filter: FilterQuery<IBill>) => BillModel.find({ client_id: { $in: filter } }).sort({ createdAt: -1 }).limit(1);

const updateBill = async (id: string, update: UpdateQuery<IBill>) => {
    try {
        return await BillModel.findOneAndUpdate({ _id: new mongoose.mongo.ObjectId(id) }, { $set: update });
    }
    catch (e) {
        throw { message: "Something went wrong" }
    }
}

const deleteBill = async (filter: FilterQuery<IBill>, update: UpdateQuery<IBill>) => await BillModel.findOneAndUpdate(filter, update);


export default {
    create,
    findBill,
    findAll,
    findSpecificBill,
    updateBill,
    deleteBill
}