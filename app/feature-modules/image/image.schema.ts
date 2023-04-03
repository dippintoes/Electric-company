import { model } from "mongoose";
import { BaseSchema } from "../../utility/base-schema";
import { IFile } from "./image.types";

const ImageSchema = new BaseSchema({
    name: {
        type: String,
        required: true,
    }
});

type FileDocument = Document & IFile;

export const ImageModel = model<FileDocument>("Image", ImageSchema);