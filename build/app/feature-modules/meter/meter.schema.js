"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeterModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base-schema");
const MeterSchema = new base_schema_1.BaseSchema({
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
});
exports.MeterModel = (0, mongoose_1.model)("meter", MeterSchema);
