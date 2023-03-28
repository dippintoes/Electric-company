import { Router } from "express";
import rolesServices from "./roles.services";
import { RESPONSE_HANDLER } from "../../utility/Response-handler";


const router = Router();

router.post("/create", async (req, res, next) => {
    try {
        const result = await rolesServices.createRole(req.body);
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})

router.delete("/delete", async (req, res, next) => {
    try {
        const deletedUser = await rolesServices.deleteRole(req.body.id);
        res.send(new RESPONSE_HANDLER(deletedUser));
    }
    catch (e) {
        next(e);
    }
})

export default router;