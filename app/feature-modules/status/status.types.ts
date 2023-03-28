import mongoose from "mongoose"

export interface IStatus {
    status: String
}

export const Status = {
    Pending: new mongoose.mongo.ObjectId("641aa4847e154eba8061f3f0"),
    Approved: new mongoose.mongo.ObjectId("641aa4967e154eba8061f3f2"),
    Rejected: new mongoose.mongo.ObjectId("641aa4a37e154eba8061f3f4")
}