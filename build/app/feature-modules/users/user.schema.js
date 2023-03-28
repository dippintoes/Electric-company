"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base-schema");
const status_types_1 = require("../status/status.types");
const UserSchema = new base_schema_1.BaseSchema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Roles"
    },
    meterType: {
        type: mongoose_1.Schema.Types.Mixed,
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
        type: mongoose_1.Schema.Types.ObjectId,
        required: false,
        default: status_types_1.Status.Pending
    },
    emp_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: false,
        ref: "Users"
    }
});
exports.UserModel = (0, mongoose_1.model)("Users", UserSchema);
