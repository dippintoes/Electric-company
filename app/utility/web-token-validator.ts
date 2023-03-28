import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const validateWebToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const auth_header = req.headers.authorization;
        const token = auth_header?.split(" ")[1];
        console.log(token);

        if (!token) return next({ message: "UNAUTHORIZED", status: 401 })

        const { JWT_SECRET } = process.env;

        const decoded = verify(token || "", JWT_SECRET || "");

        res.locals.tokenId = decoded;
        next();
    }
    catch (e) {
        next(e);
    }
}