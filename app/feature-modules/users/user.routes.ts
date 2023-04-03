import { NextFunction, Request, Response, Router } from "express";
import { checkRole } from "../../utility/check-role";
import userServices from "./user.services";
import mongoose from "mongoose";
import { RESPONSE_HANDLER } from "../../utility/Response-handler";

const router = Router();

router.get("/", checkRole(["6422a6020b6aa8e8006f277a"]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userServices.findAll();
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})

router.get("/findAllClients", checkRole(["6422a6020b6aa8e8006f277a"]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userServices.findAllClients();
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})

router.get("/findAllEmployees", checkRole(["6422a6020b6aa8e8006f277a"]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userServices.findAllEmployees();
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})


router.get("/meterRevenue/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userServices.getMeterRevenue(req.params.id);
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})

router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userServices.deleteOne({ _id: req.params.id }, { $set: { isDeleted: true } });
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = res.locals.tokenId;
        const result = await userServices.findOne({ _id: new mongoose.Types.ObjectId((req.params.id).toString()), isDeleted: false });
        if (id.toString() !== result._id.toString()) throw { message: "Unauthorized User", statusCode: 400 };
        else res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})

export default router;