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
Object.defineProperty(exports, "__esModule", { value: true });
const bill_schema_1 = require("./bill.schema");
const create = (bill) => bill_schema_1.BillModel.create(bill);
const findBill = (filter) => __awaiter(void 0, void 0, void 0, function* () { return yield bill_schema_1.BillModel.findOne(filter); });
const findAll = (filter) => __awaiter(void 0, void 0, void 0, function* () { return yield bill_schema_1.BillModel.find(filter); });
const findSpecificBill = (filter) => __awaiter(void 0, void 0, void 0, function* () { return bill_schema_1.BillModel.find({ client_id: { $in: filter } }).sort({ createdAt: -1 }).limit(1); });
const deleteBill = (filter, update) => __awaiter(void 0, void 0, void 0, function* () { return yield bill_schema_1.BillModel.findOneAndUpdate(filter, update); });
exports.default = {
    create,
    findBill,
    findAll,
    findSpecificBill,
    deleteBill
};
