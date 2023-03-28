import mongoose from "mongoose";

export const Roles = {
    ADMIN: new mongoose.mongo.ObjectId("641988a2c3bac1ad2f2db6e4"),
    EMPLOYEE: new mongoose.mongo.ObjectId("641988c3c3bac1ad2f2db6e6"),
    CLIENT: new mongoose.mongo.ObjectId("641988d1c3bac1ad2f2db6e8")
}

export interface IRole {
    _id?: string,
    role: string,
}

export type Roles = IRole[];