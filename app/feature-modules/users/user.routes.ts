import { NextFunction, Request, Response, Router } from "express";
import { validateWebToken } from "../../utility/web-token-validator";
import { checkRole } from "../../utility/check-role";
import userServices from "./user.services";
import mongoose from "mongoose";
import { RESPONSE_HANDLER } from "../../utility/Response-handler";

const router = Router();

router.get("/:id", validateWebToken, checkRole(["6422a6020b6aa8e8006f277a"]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userServices.findOne({ _id: new mongoose.Types.ObjectId((req.params.id).toString()), isDeleted: false })
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})

router.delete("/:id", validateWebToken, checkRole(["6422a6020b6aa8e8006f277a"]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userServices.deleteOne({ _id: req.params.id }, { $set: { isDeleted: true } });
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})

export default router;