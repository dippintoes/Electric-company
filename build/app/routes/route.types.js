"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedPath = exports.Route = void 0;
class Route {
    constructor(path, router) {
        this.path = path;
        this.router = router;
    }
}
exports.Route = Route;
class excludedPath {
    constructor(path, method) {
        this.path = path;
        this.method = method;
    }
}
exports.excludedPath = excludedPath;
