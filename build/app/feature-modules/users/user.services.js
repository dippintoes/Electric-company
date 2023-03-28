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
const roles_types_1 = require("../roles/roles.types");
const user_repo_1 = __importDefault(require("./user.repo"));
const user_responses_1 = require("./user.responses");
const meter_types_1 = require("../meter/meter.types");
const status_types_1 = require("../status/status.types");
const create = (user) => {
    if (!user.role && user.meterType) {
        user.role = roles_types_1.Roles.CLIENT;
        user.emp_id = new mongoose_1.default.mongo.ObjectId(user.emp_id);
    }
    else if (!user.role) {
        user.role = roles_types_1.Roles.EMPLOYEE;
        user.bill_status = status_types_1.Status.Pending;
    }
    if (user.meterType === "Normal") {
        user.meterType = meter_types_1.METER_TYPES.NORMAL;
    }
    else if (user.meterType === "Commercial") {
        user.meterType = meter_types_1.METER_TYPES.COMMERCIAL;
    }
    else {
        user.meterType = meter_types_1.METER_TYPES.SOLAR;
    }
    const record = user_repo_1.default.create(user);
    return record;
};
const findOne = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_repo_1.default.findOne(filter);
    if (!user)
        throw user_responses_1.USER_REPONSES.INVALID_CREDENTIALS;
    return user;
});
const findAllClients = () => __awaiter(void 0, void 0, void 0, function* () {
    const allClients = yield user_repo_1.default.findAll({ role: roles_types_1.Roles.CLIENT, isDeleted: false });
    if (!allClients)
        throw user_responses_1.USER_REPONSES.NO_USERS;
    return allClients;
});
const findAllEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    const allEmployees = yield user_repo_1.default.findAll({ role: roles_types_1.Roles.EMPLOYEE, isDeleted: false });
    if (!allEmployees)
        throw user_responses_1.USER_REPONSES.NO_USERS;
    return allEmployees;
});
const updateOne = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_repo_1.default.updateOne(id, update);
    if (!user)
        throw user_responses_1.USER_REPONSES.INVALID_CREDENTIALS;
    return user;
});
const deleteOne = (filter, update) => __awaiter(void 0, void 0, void 0, function* () {
    const restro = yield user_repo_1.default.deleteOne(filter, update);
    if (!restro)
        throw user_responses_1.USER_REPONSES.INVALID_CREDENTIALS;
    if (!restro.$isDeleted == false)
        throw user_responses_1.USER_REPONSES.ALREADY_DELETED;
    return restro;
});
exports.default = {
    create,
    findOne,
    findAllClients,
    findAllEmployees,
    updateOne,
    deleteOne
};
