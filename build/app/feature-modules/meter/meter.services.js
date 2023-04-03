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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const meter_repo_1 = __importDefault(require("./meter.repo"));
const meter_responses_1 = require("./meter.responses");
const bill_services_1 = __importDefault(require("../bill/bill.services"));
const create = (meter) => {
    const new_meter = meter_repo_1.default.create(meter);
    return new_meter;
};
const findOne = (filter) => {
    const all_meters = meter_repo_1.default.findOne(filter);
    if (!all_meters)
        throw meter_responses_1.METER_RESPONSES.NO_METERS_YET;
    return all_meters;
};
const findAll = () => {
    const all_meters = meter_repo_1.default.find();
    if (!all_meters)
        throw meter_responses_1.METER_RESPONSES.NO_METERS_YET;
    return all_meters;
};
const getMeterRevenue = (meterID) => __awaiter(void 0, void 0, void 0, function* () {
    const meterRevenue = yield bill_services_1.default.findAll({ meterType: new mongoose_1.default.mongo.ObjectId(meterID), outStandingBill: 0, isDeleted: false });
    const revenue = meterRevenue.reduce((a, c) => a + c.totalBill, 0);
    return revenue;
});
const deleteMeter = (id) => {
    const found_meter = meter_repo_1.default.deleteMeter(id);
    if (!found_meter)
        throw meter_responses_1.METER_RESPONSES.METER_NOT_FOUND;
    return found_meter;
};
exports.default = {
    create,
    findOne,
    findAll,
    getMeterRevenue,
    deleteMeter
};
