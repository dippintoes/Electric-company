import { Types } from "mongoose";
import { RoleModel } from "./roles.schema";
import { IRole } from "./roles.types";

const createRole=(role:IRole)=>RoleModel.create(role);

const deleteRole=(id:string)=>RoleModel.updateOne(
    {
    _id:new Types.ObjectId(id)
    },{
        isDeleted:true
    }
)

export default {
    createRole,
    deleteRole
}
