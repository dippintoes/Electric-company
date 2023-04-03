import { Schema, model } from "mongoose";
import { BaseSchema } from "../../utility/base-schema";
import { Status } from "../status/status.types";
import { IBill } from "./bill.types";

const BillSchema = new BaseSchema({
    client_id: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    reading: {
        type: Number,
        required: true
    },
    currentBill: {
        type: Number,
        required: true
    },
    totalBill: {
        type: Number,
        required: true,
        default: 0
    },
    outStandingBill: {
        type: Number,
        required: true,
        default: 0
    },
    payment_status: {
        type: Schema.Types.Mixed,
        required: true,
        default: Status.Pending,
        ref: "Status"
    },
    pics: {
        data: Buffer,
        contentType: String
    }
});

type BillDocument = IBill & Document;

export const BillModel = model<BillDocument>("Bill", BillSchema);