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
const auth_services_1 = __importDefault(require("./auth.services"));
const auth_validations_1 = require("./auth.validations");
const Response_handler_1 = require("../../utility/Response-handler");
const check_role_1 = require("../../utility/check-role");
const web_token_validator_1 = require("../../utility/web-token-validator");
const router = (0, express_1.Router)();
router.post("/login", auth_validations_1.LOGIN_USER_VALIDATION, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = res.locals;
        const result = yield auth_services_1.default.login(req.body);
        console.log(result);
        res.send(new Response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
router.post("/register", web_token_validator_1.validateWebToken, (0, check_role_1.checkRole)(["6422a6020b6aa8e8006f277a"]), auth_validations_1.CREATE_USER_VALIDATION, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_services_1.default.register(req.body);
        res.send(new Response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = router;
