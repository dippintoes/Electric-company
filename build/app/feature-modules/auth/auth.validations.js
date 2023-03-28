"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN_USER_VALIDATION = exports.CREATE_USER_VALIDATION = void 0;
const express_validator_1 = require("express-validator");
const login_validator_1 = require("../../utility/login-validator");
exports.CREATE_USER_VALIDATION = [
    (0, express_validator_1.body)("name").isString().notEmpty().withMessage("Name is Required"),
    (0, express_validator_1.body)("email").isEmail().notEmpty().withMessage("Email is Required"),
    (0, express_validator_1.body)("password").isString().notEmpty().isLength({ min: 6 }).withMessage("Minimum password length required is : 6"),
    login_validator_1.login_validator
];
exports.LOGIN_USER_VALIDATION = [
    (0, express_validator_1.body)("email").isEmail().notEmpty().withMessage("Email is Required"),
    (0, express_validator_1.body)("password").isString().notEmpty().withMessage("Password is Required"),
    login_validator_1.login_validator
];
