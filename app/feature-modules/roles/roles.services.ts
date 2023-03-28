import rolesRepo from "./roles.repo";
import { ROLE_RESPONSES } from "./roles.responses";
import { IRole } from "./roles.types";

const createRole=(role:IRole)=>{
    const newRole=rolesRepo.createRole(role);
    return newRole;
}

const deleteRole=async (id:string)=>{
    const role=await rolesRepo.deleteRole(id);
    if(!role) throw ROLE_RESPONSES.ROLE_NOT_FOUND;
    return role;
}

export default {
    createRole,
    deleteRole
}
