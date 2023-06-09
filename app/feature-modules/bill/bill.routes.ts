import { Router, NextFunction, Request, Response } from "express";
import { checkRole } from "../../utility/check-role";
import billServices from "./bill.services";
import { RESPONSE_HANDLER } from "../../utility/Response-handler";
import { upload } from "../../utility/upload_images";

const router = Router();

router.get(
  "/outStandingRevenue",
  checkRole(["642c5b434a9c511fae1623d2"]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await billServices.outStandingRevenue();
      res.send(new RESPONSE_HANDLER(result));
    } catch (e) {
      next(e);
    }
  }
);

router.patch(
  "/updateStatus/:id",
  checkRole(["642c5b434a9c511fae1623d2"]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const client_id = req.params.id;
      const result = await billServices.updateStatus(client_id);
      res.send(new RESPONSE_HANDLER(result));
    } catch (e) {
      next(e);
    }
  }
);

router.post(
  "/takeReading",
  upload.array("pics"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = res.locals.tokenId;
      if (!req.files) {
        throw { message: "No images selected", statusCode: 400 };
      }
      const images = req.files;
      const result = await billServices.takeReading(id, images, req.body);
      res.send(new RESPONSE_HANDLER(result));
    } catch (e) {
      next(e);
    }
  }
);

export default router;
