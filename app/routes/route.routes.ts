import { Application, NextFunction, Request, Response, json } from "express"
import { routes } from "./route.data";
import { RESPONSE_HANDLER } from "../utility/Response-handler";

export const registerRoutes = (app: Application) => {
    app.use(json());

    for (let route of routes) {
        app.use(route.path, route.router);
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(new RESPONSE_HANDLER(err));
    })
}