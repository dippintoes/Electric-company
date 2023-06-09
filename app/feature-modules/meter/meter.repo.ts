import { FilterQuery, Types } from "mongoose";
import { MeterModel } from "./meter.schema";
import { IMeter } from "./meter.types";

const create = (meter: IMeter) => MeterModel.create(meter);

const findOne = async (filter: FilterQuery<IMeter>) => await MeterModel.findOne(filter);

const find = () => MeterModel.find({ isDeleted: false });

const deleteMeter = (id: string) => MeterModel.findByIdAndUpdate(
    {
        _id: new Types.ObjectId(id)
    },
    {
        isDeleted: true
    }
);

export default {
    create,
    findOne,
    find,
    deleteMeter
}