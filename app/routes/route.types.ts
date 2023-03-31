import { Router } from "express";

export class Route {
    constructor(
        public path: string,
        public router: Router
    ) { }
}

export type Routes = Route[];

export class excludedPath {
    constructor(
        public path: string,
        public method: string
    ) { }
}

export type excludedPaths = excludedPath[];