"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const route_routes_1 = require("./routes/route.routes");
const mongo_connection_1 = require("./connections/mongo.connection");
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const app = (0, express_1.default)();
        yield (0, mongo_connection_1.connect_to_mongo)();
        (0, route_routes_1.registerRoutes)(app);
        const { PORT } = process.env;
        app.listen(PORT || 4321, () => {
            console.log(`Server is started on port ${PORT || 4321}`);
        });
    }
    catch (e) {
        console.log("Could not connect to server", e);
        process.exit(1);
    }
});
exports.startServer = startServer;
