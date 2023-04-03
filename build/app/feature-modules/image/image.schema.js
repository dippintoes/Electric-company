"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base-schema");
const ImageSchema = new base_schema_1.BaseSchema({
    name: {
        type: String,
        required: true,
    }
});
exports.ImageModel = (0, mongoose_1.model)("Image", ImageSchema);
