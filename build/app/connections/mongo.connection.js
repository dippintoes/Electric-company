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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect_to_mongo = void 0;
const mongoose_1 = require("mongoose");
const connect_to_mongo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { MONGO_URL } = process.env;
        yield (0, mongoose_1.connect)(MONGO_URL || "");
        console.log("Successfully connected");
        return true;
    }
    catch (e) {
        throw { message: "Could not connect to mongodb", error: e };
    }
});
exports.connect_to_mongo = connect_to_mongo;
