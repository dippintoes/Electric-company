import { model } from "mongoose";
import { BaseSchema } from "../../utility/base-schema";
import { IMeter } from "./meter.types";

const MeterSchema = new BaseSchema({
    type: {
        type: String,
        required: true
    },
    rpu: {
        type: Number,
        required: true
    },
    default_pics: {
        type: Number,
        required: true
    }
})

type MeterDocument = IMeter & Document;

export const MeterModel = model<MeterDocument>("meter", MeterSchema);