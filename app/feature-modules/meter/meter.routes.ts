import { NextFunction, Request, Router, Response } from "express";
import meterServices from "./meter.services";
import { RESPONSE_HANDLER } from "../../utility/Response-handler";
import mongoose from "mongoose";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await meterServices.findAll();
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await meterServices.findOne({ _id: new mongoose.mongo.ObjectId(req.params.id) });
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
