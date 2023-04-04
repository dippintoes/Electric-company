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
const user_repo_1 = __importDefault(require("../users/user.repo"));
const meter_services_1 = __importDefault(require("../meter/meter.services"));
const status_types_1 = require("../status/status.types");
const user_services_1 = __importDefault(require("../users/user.services"));
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
    const foundedBills = yield bill_repo_1.default.findAll(Object.assign(Object.assign({}, filter), { isDeleted: false }));
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
const updateBill = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedBill = yield bill_repo_1.default.updateBill(id, update);
    return updatedBill;
});
const takeReading = (id, files, bill) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const client = yield user_services_1.default.findOne({
        _id: new mongoose_1.default.mongo.ObjectId(bill.client_id),
    });
    const MeterType = yield meter_services_1.default.findOne({
        _id: new mongoose_1.default.mongo.ObjectId(client === null || client === void 0 ? void 0 : client.meterType),
    });
    if (!MeterType)
        throw { message: "Client does not have assigned meter", statusCode: 400 };
    else if (((_a = client === null || client === void 0 ? void 0 : client.emp_id) === null || _a === void 0 ? void 0 : _a.toString()) === id) {
        const rpu_reading = bill.reading * MeterType.rpu;
        bill.currentBill = rpu_reading;
        if (files.length === MeterType.default_pics) {
            const temp = [];
            files.forEach((img) => temp.push(img.filename));
            bill.pics = temp.slice(0);
        }
        else {
            throw {
                message: "Please enter : 20 pics for Normal, 8 for Commercial and 1 for Solar",
                statusCode: 400,
            };
        }
        bill.payment_status = status_types_1.Status.Pending;
        const exists = yield bill_repo_1.default.findSpecificBill(new mongoose_1.default.mongo.ObjectId(bill.client_id));
        console.log(exists);
        if (exists.length != 0) {
            if (exists[0].payment_status.toString() === status_types_1.Status.Pending.toString()) {
                bill.outStandingBill = exists[0].outStandingBill + bill.currentBill;
                bill.totalBill = bill.currentBill + bill.outStandingBill;
            }
        }
        else {
            bill.outStandingBill = 0;
            bill.totalBill = bill.currentBill;
        }
        yield user_repo_1.default.updateOne(bill.client_id.toString(), {
            bill: bill.totalBill,
        });
        const newBill = yield bill_repo_1.default.create(bill);
        yield user_repo_1.default.updateOne(id, { bill: bill.totalBill });
        return newBill;
    }
    else {
        throw { message: "UnAuthorized access", statusCode: 401 };
    }
});
const updateStatus = (client_id) => __awaiter(void 0, void 0, void 0, function* () {
    const bill = yield bill_repo_1.default.findAll({
        client_id: new mongoose_1.default.mongo.ObjectId(client_id),
    });
    console.log(bill);
    if (bill.length == 0) {
        throw bill_responses_1.BILL_RESPONSES.NO_OUTSTANDING_BILL;
    }
    else if (bill[bill.length - 1].payment_status.toString() === status_types_1.Status.Paid.toString()) {
        throw bill_responses_1.BILL_RESPONSES.ALREADY_PAID;
    }
    else {
        bill.forEach((item) => bill_repo_1.default.updateBill(item._id.toString(), {
            payment_status: status_types_1.Status.Paid,
            outStandingBill: 0,
        }));
    }
    console.log(bill);
    if (!bill)
        throw bill_responses_1.BILL_RESPONSES.BILL_NOT_FOUND;
    return bill;
});
const outStandingRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("start");
    const outStandingBills = yield bill_repo_1.default.findAll({
        outStandingBill: { $gt: 0 },
        isDeleted: false,
    });
    console.log(outStandingBills);
    const amount = outStandingBills.reduce((a, c) => a + c.outStandingBill, 0);
    return { "Total OutStanding Revenue": amount };
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
    updateBill,
    takeReading,
    updateStatus,
    outStandingRevenue,
    deleteBill,
};
