import { Router } from "express";
import statusServices from "./status.services";
import { RESPONSE_HANDLER } from "../../utility/Response-handler";

const router = Router();

router.post("/create", async (req, res, next) => {
    try {
        const result = await statusServices.createStatus(req.body);
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})

export default router;