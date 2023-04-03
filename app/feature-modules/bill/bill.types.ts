import { ObjectId } from "bson";

export interface IBill {
    _id?: ObjectId,
    client_id: string | ObjectId,
    reading: number,
    currentBill: number,
    outStandingBill: number,
    totalBill: number,
    payment_status: ObjectId | string,
    pics: IFILE
}

export interface IFILE {
    data: string | undefined;
    contentType: string;
}