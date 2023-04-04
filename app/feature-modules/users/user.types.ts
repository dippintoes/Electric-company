import { ObjectId } from "bson";

export interface IUser {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
  role?: ObjectId | String;
  meterType?: ObjectId | string;
  location: string;
  emp_id?: ObjectId;
  bill?: number;
}

export type Users = IUser[];
