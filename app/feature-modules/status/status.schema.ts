import { model } from "mongoose";
import { BaseSchema } from "../../utility/base-schema";
import { IStatus } from "./status.types";

const StatusSchema = new BaseSchema({
    status: {
        type: String,
        required: true,
    }
});

type StatusDocument = Document & IStatus;

export const StatusModel = model<StatusDocument>("Status", StatusSchema);