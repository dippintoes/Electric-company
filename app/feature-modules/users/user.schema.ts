import { Document, Schema, model } from "mongoose";
import { IUser } from "./user.types";
import { BaseSchema } from "../../utility/base-schema";

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
        type: String,
        required: false
    },
    bill: {
        type: Number,
        required: false
    },
})

type UserDocument = Document & IUser;

export const UserModel = model<UserDocument>("Users", UserSchema);