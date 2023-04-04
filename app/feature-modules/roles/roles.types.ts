import mongoose from "mongoose";

export const Roles = {
  ADMIN: new mongoose.mongo.ObjectId("642c5b434a9c511fae1623d2"),
  EMPLOYEE: new mongoose.mongo.ObjectId("642c5b664a9c511fae1623d4"),
  CLIENT: new mongoose.mongo.ObjectId("642c5b7f4a9c511fae1623d6"),
};

export interface IRole {
  _id?: string;
  role: string;
}

export type Roles = IRole[];
