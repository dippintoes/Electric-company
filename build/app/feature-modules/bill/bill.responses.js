"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BILL_RESPONSES = void 0;
exports.BILL_RESPONSES = {
    BILL_NOT_FOUND: {
        message: "Bill not found",
        statusCode: 404
    },
    NO_BILLS: {
        message: "No bills in the database",
        statusCode: 404
    },
    NO_OUTSTANDING_BILL: {
        message: "no outstanding amount on bill. All Clear",
        statusCode: 400
    },
    ALREADY_PAID: {
        message: "Bill is already paid",
        statusCode: 400
    }
};
