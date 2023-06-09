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
const express_1 = require("express");
const check_role_1 = require("../../utility/check-role");
const user_services_1 = __importDefault(require("./user.services"));
const mongoose_1 = __importDefault(require("mongoose"));
const Response_handler_1 = require("../../utility/Response-handler");
const router = (0, express_1.Router)();
router.get("/", (0, check_role_1.checkRole)(["642c5b434a9c511fae1623d2"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_services_1.default.findAll();
        res.send(new Response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
router.get("/findAllClients", (0, check_role_1.checkRole)(["642c5b434a9c511fae1623d2"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_services_1.default.findAllClients();
        res.send(new Response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
router.get("/findAllEmployees", (0, check_role_1.checkRole)(["642c5b434a9c511fae1623d2"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_services_1.default.findAllEmployees();
        res.send(new Response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
router.get("/meterRevenue/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_services_1.default.getMeterRevenue(req.params.id);
        res.send(new Response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
router.delete("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_services_1.default.deleteOne({ _id: req.params.id }, { $set: { isDeleted: true } });
        res.send(new Response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
router.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = res.locals.tokenId;
        const result = yield user_services_1.default.findOne({
            _id: new mongoose_1.default.Types.ObjectId(req.params.id.toString()),
            isDeleted: false,
        });
        if (id.toString() !== result._id.toString())
            throw { message: "Unauthorized User", statusCode: 400 };
        else
            res.send(new Response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = router;
