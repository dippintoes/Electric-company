import { FilterQuery, UpdateQuery } from "mongoose";
import { Roles } from "../roles/roles.types";
import userRepo from "./user.repo";
import { USER_REPONSES } from "./user.responses";
import { IUser } from "./user.types";

const create = (user: IUser) => {
    if (!user.role && !user.meterType) {
        user.role = Roles.USER;
    }
    const record = userRepo.create(user);
    return record;
}

const findOne = async (filter: any) => {
    const user = await userRepo.findOne(filter);
    if (!user) throw USER_REPONSES.INVALID_CREDENTIALS;
    return user;
};

const updateOne = async (id: string, update: Partial<IUser>) => {
    const user = await userRepo.updateOne(id, update);
    if (!user) throw USER_REPONSES.INVALID_CREDENTIALS;
    return user;
};

const deleteOne = async (filter: FilterQuery<IUser>, update: UpdateQuery<IUser>) => {
    const restro = await userRepo.deleteOne(filter, update);
    if (!restro) USER_REPONSES.INVALID_CREDENTIALS;
    return restro;
}

export default {
    create,
    findOne,
    updateOne,
    deleteOne
}