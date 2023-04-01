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
const bill_repo_1 = __importDefault(require("./bill.repo"));
const bill_responses_1 = require("./bill.responses");
const create = (bill) => {
    if (bill.client_id)
        bill.client_id = new mongoose_1.default.mongo.ObjectId(bill.client_id);
    const newBill = bill_repo_1.default.create(bill);
    return newBill;
};
const findBill = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const foundBill = yield bill_repo_1.default.findBill(filter);
    if (!foundBill)
        throw bill_responses_1.BILL_RESPONSES.BILL_NOT_FOUND;
    return foundBill;
});
const findAll = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const foundedBills = yield bill_repo_1.default.findAll(filter);
    if (!foundedBills)
        throw bill_responses_1.BILL_RESPONSES.NO_BILLS;
    return foundedBills;
});
const findSpecificBill = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const foundedBills = yield bill_repo_1.default.findSpecificBill(filter);
    if (!foundedBills)
        throw bill_responses_1.BILL_RESPONSES.NO_BILLS;
    return foundedBills;
});
const deleteBill = (filter, update) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedBill = yield bill_repo_1.default.deleteBill(filter, update);
    return deleteBill;
});
exports.default = {
    create,
    findBill,
    findAll,
    findSpecificBill,
    deleteBill
};
