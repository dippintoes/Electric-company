import mongoose, { FilterQuery, Types, UpdateQuery } from "mongoose";
import { Roles } from "../roles/roles.types";
import userRepo from "./user.repo";
import { USER_REPONSES } from "./user.responses";
import { IUser } from "./user.types";
import { METER_TYPES } from "../meter/meter.types";
import { Status } from "../status/status.types";

const create = (user: IUser) => {
    if (!user.role && user.meterType) {
        user.role = Roles.CLIENT;
        user.emp_id = new mongoose.mongo.ObjectId(user.emp_id);
    }
    else if (!user.role) {
        user.role = Roles.EMPLOYEE;
    }
    if (user.meterType === "Normal") {
        user.meterType = METER_TYPES.NORMAL
    }
    else if (user.meterType === "Commercial") {
        user.meterType = METER_TYPES.COMMERCIAL
    }
    else {
        user.meterType = METER_TYPES.SOLAR
    }
    const record = userRepo.create(user);
    return record;
}

const findOne = async (filter: any) => {
    const user = await userRepo.findOne(filter);
    if (!user) throw USER_REPONSES.INVALID_CREDENTIALS;
    return user;
};

const findAllClients = async () => {
    const allClients = await userRepo.findAll({ role: Roles.CLIENT, isDeleted: false });
    if (!allClients) throw USER_REPONSES.NO_USERS;
    return allClients;
}

const findAllEmployees = async () => {
    const allEmployees = await userRepo.findAll({ role: Roles.EMPLOYEE, isDeleted: false });
    if (!allEmployees) throw USER_REPONSES.NO_USERS;
    return allEmployees;
}

const updateOne = async (id: string, update: Partial<IUser>) => {
    const user = await userRepo.updateOne(id, update);
    if (!user) throw USER_REPONSES.INVALID_CREDENTIALS;
    return user;
};

const deleteOne = async (filter: FilterQuery<IUser>, update: UpdateQuery<IUser>) => {
    const restro = await userRepo.deleteOne(filter, update);
    if (!restro) throw USER_REPONSES.INVALID_CREDENTIALS;
    if (!restro.$isDeleted == false) throw USER_REPONSES.ALREADY_DELETED;
    return restro;
}

export default {
    create,
    findOne,
    findAllClients,
    findAllEmployees,
    updateOne,
    deleteOne
}