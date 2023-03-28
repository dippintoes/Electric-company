import { Route, Routes } from "./route.types";
import AuthRouter from "../feature-modules/auth/auth.routes";
import RoleRouter from "../feature-modules/roles/roles.routes";
import RestaurantRouter from "../feature-modules/restaurants/restaurants.routes";
import UserRouter from "../feature-modules/users/user.routes";
import StatusRouter from "../feature-modules/status/status.routes";

export const routes: Routes = [
    new Route("/auth", AuthRouter),
    new Route("/role", RoleRouter),
    new Route("/restaurant", RestaurantRouter),
    new Route("/user", UserRouter),
    new Route("/status", StatusRouter)
]