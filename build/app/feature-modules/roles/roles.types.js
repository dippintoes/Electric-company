"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.Roles = {
    ADMIN: new mongoose_1.default.mongo.ObjectId("642c5b434a9c511fae1623d2"),
    EMPLOYEE: new mongoose_1.default.mongo.ObjectId("642c5b664a9c511fae1623d4"),
    CLIENT: new mongoose_1.default.mongo.ObjectId("642c5b7f4a9c511fae1623d6"),
};
