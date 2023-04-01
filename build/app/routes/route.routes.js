"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = require("express");
const route_data_1 = require("./route.data");
const Response_handler_1 = require("../utility/Response-handler");
const web_token_validator_1 = require("../utility/web-token-validator");
const registerRoutes = (app) => {
    app.use((0, web_token_validator_1.authorize)(route_data_1.excludedPaths));
    app.use((0, express_1.json)());
    for (let route of route_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(new Response_handler_1.RESPONSE_HANDLER(err));
    });
};
exports.registerRoutes = registerRoutes;
