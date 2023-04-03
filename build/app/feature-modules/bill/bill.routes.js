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
const bill_services_1 = __importDefault(require("./bill.services"));
const Response_handler_1 = require("../../utility/Response-handler");
const router = (0, express_1.Router)();
router.get("/outStandingRevenue", (0, check_role_1.checkRole)(["6422a6020b6aa8e8006f277a"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bill_services_1.default.outStandingRevenue();
        res.send(new Response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
router.patch("/updateStatus/:id", (0, check_role_1.checkRole)(["6422a6020b6aa8e8006f277a"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client_id = req.params.id;
        const result = yield bill_services_1.default.updateStatus(client_id);
        res.send(new Response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
router.post("/takeReading", (0, check_role_1.checkRole)(["6422a60f0b6aa8e8006f277e"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = res.locals.tokenId;
        const result = yield bill_services_1.default.takeReading(id, req.body);
        res.send(new Response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = router;
