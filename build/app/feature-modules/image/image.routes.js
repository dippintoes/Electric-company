"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Response_handler_1 = require("../../utility/Response-handler");
const upload_images_1 = require("../../utility/upload_images");
const image_schema_1 = require("./image.schema");
const router = (0, express_1.Router)();
router.post("/upload", upload_images_1.upload.single("image"), (req, res, next) => {
    var _a;
    try {
        req.file;
        const newImg = image_schema_1.ImageModel.create({ name: (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename });
        res.send(new Response_handler_1.RESPONSE_HANDLER(newImg));
    }
    catch (e) {
        next(e);
    }
});
exports.default = router;
