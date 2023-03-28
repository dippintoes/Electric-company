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
const bcryptjs_1 = require("bcryptjs");
const user_services_1 = __importDefault(require("../users/user.services"));
const user_responses_1 = require("../users/user.responses");
const jsonwebtoken_1 = require("jsonwebtoken");
const encryptUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield (0, bcryptjs_1.genSalt)(10);
    const hashedPassword = yield (0, bcryptjs_1.hash)(user.password, salt);
    user.password = hashedPassword;
    return user;
});
const register = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const validUser = yield encryptUser(user);
    const record = user_services_1.default.create(validUser);
    return record;
});
const login = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield user_services_1.default.findOne({ email: credentials.email });
    if (!foundUser)
        throw user_responses_1.USER_REPONSES.INVALID_CREDENTIALS;
    const matchedPassword = yield (0, bcryptjs_1.compare)(credentials.password, foundUser.password);
    if (!matchedPassword)
        throw user_responses_1.USER_REPONSES.INVALID_CREDENTIALS;
    const { _id, role } = foundUser;
    const { JWT_SECRET } = process.env;
    // symmetric token
    try {
        const token = (0, jsonwebtoken_1.sign)({ id: _id, role: role }, JWT_SECRET || "");
        console.log(token);
        return { foundUser, token };
    }
    catch (e) {
        console.log(e);
    }
});
exports.default = {
    register,
    login
};
