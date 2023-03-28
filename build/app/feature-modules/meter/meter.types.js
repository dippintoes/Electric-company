"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.METER_TYPES = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.METER_TYPES = {
    NORMAL: new mongoose_1.default.mongo.ObjectId("6422a48f5a3ffdb24fa9d06f"),
    COMMERCIAL: new mongoose_1.default.mongo.ObjectId("6422a4a65a3ffdb24fa9d071"),
    SOLAR: new mongoose_1.default.mongo.ObjectId("6422a4b35a3ffdb24fa9d073")
};
