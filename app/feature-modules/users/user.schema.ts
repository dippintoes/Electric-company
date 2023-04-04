import { Document, Schema, model } from "mongoose";
import { IUser } from "./user.types";
import { BaseSchema } from "../../utility/base-schema";

const UserSchema = new BaseSchema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Schema.Types.Mixed,
    required: true,
    ref: "Roles",
  },
  meterType: {
    type: Schema.Types.Mixed,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  emp_id: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "Users",
  },
  bill: {
    type: Number,
    required: false,
    default: 0,
  },
});

type UserDocument = Document & IUser;

export const UserModel = model<UserDocument>("Users", UserSchema);
