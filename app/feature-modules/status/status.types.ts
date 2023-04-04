import mongoose from "mongoose";

export interface IStatus {
  name: String;
}

export const Status = {
  Pending: new mongoose.mongo.ObjectId("642c5cc24a9c511fae1623df"),
  Paid: new mongoose.mongo.ObjectId("642c5cd44a9c511fae1623e1"),
};
