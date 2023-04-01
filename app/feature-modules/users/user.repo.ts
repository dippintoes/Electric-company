import { FilterQuery, UpdateQuery } from "mongoose";
import { UserModel } from "./user.schema";
import { IUser } from "./user.types";

const create = (user: IUser) => UserModel.create(user);

const findOne = async (filter: Partial<IUser>) => {
    try {
        return await UserModel.findOne({
            ...filter, isDeleted: false
        });
    }
    catch (e) {
        throw { message: "Something went wrong" }
    }
}

const findAll = (filter: FilterQuery<IUser>) => UserModel.find({ ...filter, isDeleted: false });

const updateOne = async (id: string, update: Partial<IUser>) => {
    try {
        return await UserModel.findOneAndUpdate({ _id: id }, { $set: update });
    }
    catch (e) {
        throw { message: "Something went wrong" }
    }
}

const deleteOne = (filter: FilterQuery<IUser>, update: UpdateQuery<IUser>) =>
    UserModel.findOneAndUpdate(filter, update, { new: true });

export default {
    create,
    findOne,
    findAll,
    updateOne,
    deleteOne
}