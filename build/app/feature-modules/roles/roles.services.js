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
const roles_repo_1 = __importDefault(require("./roles.repo"));
const roles_responses_1 = require("./roles.responses");
const createRole = (role) => {
    const newRole = roles_repo_1.default.create(role);
    return newRole;
};
const findRole = () => __awaiter(void 0, void 0, void 0, function* () {
    const allRoles = yield roles_repo_1.default.find();
    if (!allRoles)
        throw roles_responses_1.ROLE_RESPONSES.NO_ROLES_YET;
    return allRoles;
});
const deleteRole = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const role = yield roles_repo_1.default.deleteRole(id);
    if (!role)
        throw roles_responses_1.ROLE_RESPONSES.ROLE_NOT_FOUND;
    return role;
});
exports.default = {
    createRole,
    findRole,
    deleteRole
};
