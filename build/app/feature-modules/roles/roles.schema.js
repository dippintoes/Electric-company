"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base-schema");
const RoleSchema = new base_schema_1.BaseSchema({
    role: {
        type: String,
        required: true
    }
});
exports.RoleModel = (0, mongoose_1.model)("Roles", RoleSchema);
