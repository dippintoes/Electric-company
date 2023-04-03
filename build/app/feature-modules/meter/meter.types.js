"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.METER_TYPES = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.METER_TYPES = {
    NORMAL: new mongoose_1.default.mongo.ObjectId("642a8e05a2f5ec5dd8e252d4"),
    COMMERCIAL: new mongoose_1.default.mongo.ObjectId("642a8e1ba2f5ec5dd8e252d6"),
    SOLAR: new mongoose_1.default.mongo.ObjectId("642a8e28a2f5ec5dd8e252d8")
};
