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
const upload_images_1 = require("../../utility/upload_images");
const router = (0, express_1.Router)();
router.get("/outStandingRevenue", (0, check_role_1.checkRole)(["642c5b434a9c511fae1623d2"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bill_services_1.default.outStandingRevenue();
        res.send(new Response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
router.patch("/updateStatus/:id", (0, check_role_1.checkRole)(["642c5b434a9c511fae1623d2"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client_id = req.params.id;
        const result = yield bill_services_1.default.updateStatus(client_id);
        res.send(new Response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
router.post("/takeReading", upload_images_1.upload.array("pics"), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = res.locals.tokenId;
        if (!req.files) {
            throw { message: "No images selected", statusCode: 400 };
        }
        const images = req.files;
        const result = yield bill_services_1.default.takeReading(id, images, req.body);
        res.send(new Response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = router;
