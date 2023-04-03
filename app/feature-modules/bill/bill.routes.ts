import { Router, NextFunction, Request, Response, } from "express";
import { checkRole } from "../../utility/check-role";
import billServices from "./bill.services";
import { RESPONSE_HANDLER } from "../../utility/Response-handler";
import { upload } from "../../utility/upload_images";

const router = Router();

router.get("/outStandingRevenue", checkRole(["6422a6020b6aa8e8006f277a"]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await billServices.outStandingRevenue();
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
});

router.patch("/updateStatus/:id", checkRole(["6422a6020b6aa8e8006f277a"]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client_id = req.params.id;
        const result = await billServices.updateStatus(client_id);
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})

router.post("/takeReading", checkRole(["6422a60f0b6aa8e8006f277e"]), upload.single("image"), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = res.locals.tokenId;
        const file = {
            data: req.file?.filename,
            contentType: "image/png"
        }
        const result = await billServices.takeReading(id, file, req.body);
        res.send(new RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
})


export default router;