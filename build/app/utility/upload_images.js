"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
exports.upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination: "./images",
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}--${file.originalname}`);
        },
    }),
    //   limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg") {
            cb(null, true);
        }
        else {
            cb(null, false);
            const err = new Error("Only .png, .jpg and .jpeg format allowed!");
            err.name = "ExtensionError";
            return cb(err);
        }
    },
});
