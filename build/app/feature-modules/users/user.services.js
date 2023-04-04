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
const create = (user) => {
    var _a;
    if (user.role && ((_a = user.role) === null || _a === void 0 ? void 0 : _a.toString()) == "ADMIN") {
        user.role = roles_types_1.Roles.ADMIN;
        console.log(user.role);
    }
    else if (!user.role && user.meterType) {
        user.role = roles_types_1.Roles.CLIENT;
        user.emp_id = new mongoose_1.default.mongo.ObjectId(user.emp_id);
        if (user.meterType === "Normal") {
            user.meterType = meter_types_1.METER_TYPES.NORMAL;
        }
        else if (user.meterType === "Commercial") {
            user.meterType = meter_types_1.METER_TYPES.COMMERCIAL;
        }
        else {
            user.meterType = meter_types_1.METER_TYPES.SOLAR;
        }
    }
    else if (!user.role) {
        user.role = roles_types_1.Roles.EMPLOYEE;
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
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield user_repo_1.default.findAll({ isDeleted: false });
    if (!allUsers)
        throw user_responses_1.USER_REPONSES.NO_USERS;
    return allUsers;
});
const findAllClients = () => __awaiter(void 0, void 0, void 0, function* () {
    const allClients = yield user_repo_1.default.findAll({
        role: roles_types_1.Roles.CLIENT,
        isDeleted: false,
    });
    const totalRevenue = allClients.reduce((a, c) => a + Number(c.bill), 0);
    if (!allClients)
        throw user_responses_1.USER_REPONSES.NO_USERS;
    return Object.assign(Object.assign({}, allClients), { totalRevenue: totalRevenue });
});
const findAllEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    const allEmployees = yield user_repo_1.default
        .findAll({
        role: roles_types_1.Roles.EMPLOYEE,
        isDeleted: false,
    })
        .populate("Roles")
        .populate("Status")
        .populate("Users");
    if (!allEmployees)
        throw user_responses_1.USER_REPONSES.NO_USERS;
    return allEmployees;
});
const getMeterRevenue = (meterID) => __awaiter(void 0, void 0, void 0, function* () {
    const meterUsers = yield user_repo_1.default.findAll({
        meterType: new mongoose_1.default.mongo.ObjectId(meterID),
    });
    const revenue = meterUsers.reduce((a, c) => a + Number(c.bill), 0);
    return {
        "Given meter revenue is: ": revenue,
        "No. of users are: ": meterUsers.length,
    };
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
    findAll,
    getMeterRevenue,
    findAllClients,
    findAllEmployees,
    deleteOne,
};
