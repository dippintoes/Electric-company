"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base-schema");
const status_types_1 = require("../status/status.types");
const BillSchema = new base_schema_1.BaseSchema({
    client_id: {
        type: mongoose_1.Schema.Types.ObjectId,
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
        type: mongoose_1.Schema.Types.Mixed,
        required: true,
        default: status_types_1.Status.Pending,
        ref: "Status"
    },
    pics: {
        type: [String],
        required: true
    }
});
exports.BillModel = (0, mongoose_1.model)("Bill", BillSchema);
