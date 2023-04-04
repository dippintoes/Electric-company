"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base-schema");
const UserSchema = new base_schema_1.BaseSchema({
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
        type: mongoose_1.Schema.Types.Mixed,
        required: true,
        ref: "Roles",
    },
    meterType: {
        type: mongoose_1.Schema.Types.Mixed,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    emp_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: false,
        ref: "Users",
    },
    bill: {
        type: Number,
        required: false,
        default: 0,
    },
});
exports.UserModel = (0, mongoose_1.model)("Users", UserSchema);
