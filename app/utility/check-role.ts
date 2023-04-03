import { NextFunction, Request, Response } from "express"

export const checkRole = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const { role } = res.locals.tokenId;
            console.log(roles);
            for (let ele of roles) {
                if (ele === role) {
                    console.log(role);
                    return next();
                }
            }
            return next({ message: "Unauthorised user", statusCode: 401 });
        } catch (e) {
            next(e);
        }
    }
}