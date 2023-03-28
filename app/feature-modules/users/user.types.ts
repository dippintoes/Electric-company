import { ObjectId } from "bson";

export interface IUser {
    _id?: string
    name: string,
    email: string,
    password: string,
    role?: ObjectId,
    meterType?: ObjectId | string,
    bill_status?: ObjectId,
    location: string,
    bill?: number,
    outstanding_bill?: number
}

export type Users = IUser[];
