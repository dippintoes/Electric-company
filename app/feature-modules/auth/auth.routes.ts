import { NextFunction, Request, Response, Router } from "express";
import authServices from "./auth.services";
import { IUser } from "../users/user.types";
import {
  CREATE_USER_VALIDATION,
  LOGIN_USER_VALIDATION,
} from "./auth.validations";
import { RESPONSE_HANDLER } from "../../utility/Response-handler";

const router = Router();

router.post(
  "/login",
  LOGIN_USER_VALIDATION,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = res.locals;
      const result = await authServices.login(req.body);
      console.log(result);
      res.send(new RESPONSE_HANDLER(result));
    } catch (e) {
      next(e);
    }
  }
);

router.post(
  "/register",
  CREATE_USER_VALIDATION,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result: IUser = await authServices.register(req.body);
      res.send(new RESPONSE_HANDLER(result));
    } catch (e) {
      next(e);
    }
  }
);

export default router;
