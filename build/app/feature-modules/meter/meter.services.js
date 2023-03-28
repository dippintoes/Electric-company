"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const meter_repo_1 = __importDefault(require("./meter.repo"));
const meter_responses_1 = require("./meter.responses");
const create = (meter) => {
    const new_meter = meter_repo_1.default.create(meter);
    return new_meter;
};
const findAll = () => {
    const all_meters = meter_repo_1.default.find();
    if (!all_meters)
        throw meter_responses_1.METER_RESPONSES.NO_METERS_YET;
    return all_meters;
};
const deleteMeter = (id) => {
    const found_meter = meter_repo_1.default.deleteMeter(id);
    if (!found_meter)
        throw meter_responses_1.METER_RESPONSES.METER_NOT_FOUND;
    return found_meter;
};
exports.default = {
    create,
    findAll,
    deleteMeter
};
