"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateWebToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const validateWebToken = (req, res, next) => {
    try {
        const auth_header = req.headers.authorization;
        const token = auth_header === null || auth_header === void 0 ? void 0 : auth_header.split(" ")[1];
        console.log(token);
        if (!token)
            return next({ message: "UNAUTHORIZED", status: 401 });
        const { JWT_SECRET } = process.env;
        const decoded = (0, jsonwebtoken_1.verify)(token || "", JWT_SECRET || "");
        res.locals.tokenId = decoded;
        next();
    }
    catch (e) {
        next(e);
    }
};
exports.validateWebToken = validateWebToken;
