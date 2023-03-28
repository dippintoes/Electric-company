"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const route_types_1 = require("./route.types");
const auth_routes_1 = __importDefault(require("../feature-modules/auth/auth.routes"));
const roles_routes_1 = __importDefault(require("../feature-modules/roles/roles.routes"));
const user_routes_1 = __importDefault(require("../feature-modules/users/user.routes"));
const status_routes_1 = __importDefault(require("../feature-modules/status/status.routes"));
const meter_routes_1 = __importDefault(require("../feature-modules/meter/meter.routes"));
exports.routes = [
    new route_types_1.Route("/auth", auth_routes_1.default),
    new route_types_1.Route("/role", roles_routes_1.default),
    new route_types_1.Route("/user", user_routes_1.default),
    new route_types_1.Route("/status", status_routes_1.default),
    new route_types_1.Route("/meter", meter_routes_1.default)
];
