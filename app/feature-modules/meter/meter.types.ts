import mongoose from "mongoose";

export interface IMeter {
  _id?: string;
  type: string;
  rpu: number;
  default_pics: number;
}

export const METER_TYPES = {
  NORMAL: new mongoose.mongo.ObjectId("642c5c114a9c511fae1623d8"),
  COMMERCIAL: new mongoose.mongo.ObjectId("642c5c3f4a9c511fae1623da"),
  SOLAR: new mongoose.mongo.ObjectId("642c5c784a9c511fae1623dc"),
};
