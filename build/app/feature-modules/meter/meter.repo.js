"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const meter_schema_1 = require("./meter.schema");
const create = (meter) => meter_schema_1.MeterModel.create(meter);
const findOne = (filter) => __awaiter(void 0, void 0, void 0, function* () { return yield meter_schema_1.MeterModel.findOne(filter); });
const find = () => meter_schema_1.MeterModel.find({ isDeleted: false });
const deleteMeter = (id) => meter_schema_1.MeterModel.findByIdAndUpdate({
    _id: new mongoose_1.Types.ObjectId(id)
}, {
    isDeleted: true
});
exports.default = {
    create,
    findOne,
    find,
    deleteMeter
};
