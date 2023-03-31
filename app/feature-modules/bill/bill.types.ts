import { ObjectId } from "mongoose";

export interface IBill {
    _id?: ObjectId,
    client_id: ObjectId,
    reading: number,
    total_Bill: number,
    outStandingBill: number,
    payment_status: ObjectId,
    pics: string[]
}