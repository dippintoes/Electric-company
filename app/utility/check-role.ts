import { NextFunction, Request, Response } from "express"

export const checkRole=(roles:string[])=>{
    return (req:Request, res:Response, next:NextFunction)=>{
        try{
            const {id,role}=res.locals.tokenId;
            console.log(role,roles);
            for(let ele of roles){
                if(ele===role){
                    console.log(role);
                    return next();
                }
            }
            return next({ message: "Unauthorised", statusCode: 401 });
            } catch (e) {
                next(e);
            }
    }
}