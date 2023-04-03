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
const bill_schema_1 = require("./bill.schema");
const create = (bill) => bill_schema_1.BillModel.create(bill);
const findBill = (filter) => __awaiter(void 0, void 0, void 0, function* () { return yield bill_schema_1.BillModel.findOne(filter); });
const findAll = (filter) => __awaiter(void 0, void 0, void 0, function* () { return yield bill_schema_1.BillModel.find(filter); });
const findSpecificBill = (filter) => __awaiter(void 0, void 0, void 0, function* () { return bill_schema_1.BillModel.find({ client_id: { $in: filter } }).sort({ createdAt: -1 }).limit(1); });
const updateBill = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield bill_schema_1.BillModel.findOneAndUpdate({ _id: new mongoose_1.default.mongo.ObjectId(id) }, { $set: update });
    }
    catch (e) {
        throw { message: "Something went wrong" };
    }
});
const deleteBill = (filter, update) => __awaiter(void 0, void 0, void 0, function* () { return yield bill_schema_1.BillModel.findOneAndUpdate(filter, update); });
exports.default = {
    create,
    findBill,
    findAll,
    findSpecificBill,
    updateBill,
    deleteBill
};
