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
const user_schema_1 = require("./user.schema");
const create = (user) => user_schema_1.UserModel.create(user);
const findOne = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_schema_1.UserModel.findOne(Object.assign(Object.assign({}, filter), { isDeleted: false }));
    }
    catch (e) {
        throw { message: "Something went wrong" };
    }
});
const findAll = (filter) => user_schema_1.UserModel.find(Object.assign(Object.assign({}, filter), { isDeleted: false }));
const updateOne = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_schema_1.UserModel.findOneAndUpdate({ _id: new mongoose_1.default.mongo.ObjectId(id) }, { $set: update });
    }
    catch (e) {
        throw { message: "Something went wrong" };
    }
});
const deleteOne = (filter, update) => user_schema_1.UserModel.findOneAndUpdate(filter, update, { new: true });
exports.default = {
    create,
    findOne,
    findAll,
    updateOne,
    deleteOne
};
