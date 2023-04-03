"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole = void 0;
const checkRole = (roles) => {
    return (req, res, next) => {
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
        }
        catch (e) {
            next(e);
        }
    };
};
exports.checkRole = checkRole;
