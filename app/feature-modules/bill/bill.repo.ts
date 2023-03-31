import { FilterQuery, UpdateQuery } from "mongoose";
import { BillModel } from "./bill.schema";
import { IBill } from "./bill.types";

const create = (bill: IBill) => BillModel.create(bill);

const findBill = async (filter: FilterQuery<IBill>) => await BillModel.findById(filter);

const findAll = async (filter: FilterQuery<IBill>) => await BillModel.find(filter);

const deleteBill = async (filter: FilterQuery<IBill>, update: UpdateQuery<IBill>) => await BillModel.findOneAndUpdate(filter, update);

export default {
    create,
    findBill,
    findAll,
    deleteBill
}