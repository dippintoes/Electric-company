"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.Status = {
    Pending: new mongoose_1.default.mongo.ObjectId("642c5cc24a9c511fae1623df"),
    Paid: new mongoose_1.default.mongo.ObjectId("642c5cd44a9c511fae1623e1"),
};
