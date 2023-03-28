import { Document, Schema, model } from "mongoose";
import { IUser } from "./user.types";
import { BaseSchema } from "../../utility/base-schema";
import { Status } from "../status/status.types";

const UserSchema = new BaseSchema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Roles"
    },
    meterType: {
        type: Schema.Types.Mixed,
        required: false
    },
    bill: {
        type: Number,
        required: false,
        default: 0
    },
    outstanding_bill: {
        type: Number,
        required: false,
        default: 0
    },
    location: {
        type: String,
        required: false
    },
    bill_status: {
        type: Schema.Types.ObjectId,
        required: false,
        default: Status.Pending
    }
})

type UserDocument = Document & IUser;

export const UserModel = model<UserDocument>("Users", UserSchema);