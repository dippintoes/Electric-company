import { StatusModel } from "./status.schema";
import { IStatus } from "./status.types";

const create = (status: IStatus) => StatusModel.create(status);

export default {
    create
}