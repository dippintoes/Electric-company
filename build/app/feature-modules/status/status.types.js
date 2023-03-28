"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.Status = {
    Pending: new mongoose_1.default.mongo.ObjectId("6422bc8417ae93f043f9d93f"),
    Paid: new mongoose_1.default.mongo.ObjectId("6422bca117ae93f043f9d941")
};
