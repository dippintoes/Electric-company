"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const meter_schema_1 = require("./meter.schema");
const create = (meter) => meter_schema_1.MeterModel.create(meter);
const find = () => meter_schema_1.MeterModel.find({ isDeleted: false });
const deleteMeter = (id) => meter_schema_1.MeterModel.findByIdAndUpdate({
    _id: new mongoose_1.Types.ObjectId(id)
}, {
    isDeleted: true
});
exports.default = {
    create,
    find,
    deleteMeter
};
