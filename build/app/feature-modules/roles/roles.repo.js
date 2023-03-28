"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const roles_schema_1 = require("./roles.schema");
const create = (role) => roles_schema_1.RoleModel.create(role);
const find = () => roles_schema_1.RoleModel.find();
const deleteRole = (id) => roles_schema_1.RoleModel.updateOne({
    _id: new mongoose_1.Types.ObjectId(id)
}, {
    isDeleted: true
});
exports.default = {
    create,
    find,
    deleteRole
};
