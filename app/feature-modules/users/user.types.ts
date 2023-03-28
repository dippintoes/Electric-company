import { ObjectId } from "bson";

export interface IUser {
    _id?: string
    name: string,
    email: string,
    password: string,
    role?: ObjectId,
    meterType?: string,
    bill?: number
}

export type Users = IUser[];
