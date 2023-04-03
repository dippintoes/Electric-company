import { NextFunction, Request, Response, Router } from "express";
import { RESPONSE_HANDLER } from "../../utility/Response-handler";
import { upload } from "../../utility/upload_images";
import { ImageModel } from "./image.schema";
import { IFile } from "./image.types";

const router = Router();

router.post("/upload", upload.array("image", 20), (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.files) {
            throw { message: "No images selected", statusCode: 400 };
        }
        else {
            const images = req.files.forEach((img: any) => {
                ImageModel.create({ name: img.name });
            })
            res.send(new RESPONSE_HANDLER(images));
        }
    }
    catch (e) {
        next(e);
    }
})

export default router;