"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.METER_TYPES = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.METER_TYPES = {
    NORMAL: new mongoose_1.default.mongo.ObjectId("642c5c114a9c511fae1623d8"),
    COMMERCIAL: new mongoose_1.default.mongo.ObjectId("642c5c3f4a9c511fae1623da"),
    SOLAR: new mongoose_1.default.mongo.ObjectId("642c5c784a9c511fae1623dc"),
};
