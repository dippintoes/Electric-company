import { Schema } from "mongoose";
import { BaseSchema } from "../../utility/base-schema";
import { Status } from "../status/status.types";

const BillSchema = new BaseSchema({
    client_id: {
        types: Schema.Types.ObjectId,
        required: true,
        ref: "Users"
    },
    reading: {
        type: Number,
        required: true
    },
    total_bill: {
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
        type: Schema.Types.ObjectId,
        required: true,
        default: Status.Pending,
        ref: "Status"
    },
    pics: {

    }
});