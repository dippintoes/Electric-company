"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login_validator = void 0;
const express_validator_1 = require("express-validator");
const login_validator = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return next({ statusCode: 400, errors: errors.array() });
    }
    next();
};
exports.login_validator = login_validator;
