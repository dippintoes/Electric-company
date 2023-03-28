import mongoose from "mongoose";

export const Roles = {
    ADMIN: new mongoose.mongo.ObjectId("6422a6020b6aa8e8006f277a"),
    EMPLOYEE: new mongoose.mongo.ObjectId("6422a60f0b6aa8e8006f277e"),
    CLIENT: new mongoose.mongo.ObjectId("6422a6080b6aa8e8006f277c")
}

export interface IRole {
    _id?: string,
    role: string,
}

export type Roles = IRole[];