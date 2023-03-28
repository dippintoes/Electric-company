"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status_schema_1 = require("./status.schema");
const create = (status) => status_schema_1.StatusModel.create(status);
exports.default = {
    create
};
