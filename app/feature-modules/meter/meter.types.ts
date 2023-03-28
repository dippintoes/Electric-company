import mongoose from "mongoose"

export interface IMeter {
    _id?: string,
    type: string,
    rpu: number,
    default_pics: number
}

export const METER_TYPES = {
    NORMAL: new mongoose.mongo.ObjectId("6422a48f5a3ffdb24fa9d06f"),
    COMMERCIAL: new mongoose.mongo.ObjectId("6422a4a65a3ffdb24fa9d071"),
    SOLAR: new mongoose.mongo.ObjectId("6422a4b35a3ffdb24fa9d073")
}