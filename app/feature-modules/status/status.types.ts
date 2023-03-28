import mongoose from "mongoose";

export interface IStatus {
    name: String
}

export const Status = {
    Pending: new mongoose.mongo.ObjectId("6422bc8417ae93f043f9d93f"),
    Paid: new mongoose.mongo.ObjectId("6422bca117ae93f043f9d941")
}