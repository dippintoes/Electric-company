import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { excludedPaths } from "../routes/route.types";

export const authorize = (excludedPaths: excludedPaths) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const middleware = excludedPaths.find(e => e.path === req.url && e.method === req.method);
        if (middleware) next();
        else {
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
    }
}