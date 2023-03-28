"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.Roles = {
    ADMIN: new mongoose_1.default.mongo.ObjectId("6422a6020b6aa8e8006f277a"),
    EMPLOYEE: new mongoose_1.default.mongo.ObjectId("6422a60f0b6aa8e8006f277e"),
    CLIENT: new mongoose_1.default.mongo.ObjectId("6422a6080b6aa8e8006f277c")
};
