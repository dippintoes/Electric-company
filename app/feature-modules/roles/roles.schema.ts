import { model } from "mongoose";
import { IRole } from "./roles.types";
import { BaseSchema } from "../../utility/base-schema";

const RoleSchema = new BaseSchema({
    role: {
        type: String,
        required: true
    }
})

type RoleDocument = IRole & Document;

export const RoleModel = model<RoleDocument>("Roles", RoleSchema);