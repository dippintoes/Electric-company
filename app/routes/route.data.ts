import { Route, Routes, excludedPath } from "./route.types";
import AuthRouter from "../feature-modules/auth/auth.routes";
import RoleRouter from "../feature-modules/roles/roles.routes";
import UserRouter from "../feature-modules/users/user.routes";
import StatusRouter from "../feature-modules/status/status.routes";
import MeterRouter from "../feature-modules/meter/meter.routes";
import BillRouter from "../feature-modules/bill/bill.routes";

export const routes: Routes = [
    new Route("/auth", AuthRouter),
    new Route("/role", RoleRouter),
    new Route("/user", UserRouter),
    new Route("/status", StatusRouter),
    new Route("/meter", MeterRouter),
    new Route("/bill", BillRouter)
]

export const excludedPaths = [
    new excludedPath("/auth/login", "POST")
]