import { ObjectId } from "bson";

export interface IUser {
    _id?: string
    name: string,
    email: string,
    password: string,
    role?: ObjectId,
    meterType?: ObjectId | string,
    location: string,
    emp_id?: ObjectId
}

export type Users = IUser[];
