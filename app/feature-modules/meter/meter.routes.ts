import { NextFunction, Request, Router, Response } from "express";
import meterServices from "./meter.services";
import { RESPONSE_HANDLER } from "../../utility/Response-handler";
import { login_validator } from "../../utility/login-validator";
import { validateWebToken } from "../../utility/web-token-validator";
import { checkRole } from "../../utility/check-role";

const router = Router();

router.get("/", validateWebToken,/*checkRole(["641988a2c3bac1ad2f2db6e4"]),*/ async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await meterServices.findAll();
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})

router.post("/create", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await meterServices.create(req.body);
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})

router.delete("/delete/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await meterServices.deleteMeter(req.params.id);
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})

export default router;
