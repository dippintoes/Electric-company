"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base-schema");
const StatusSchema = new base_schema_1.BaseSchema({
    status: {
        type: String,
        required: true,
    }
});
exports.StatusModel = (0, mongoose_1.model)("Status", StatusSchema);
