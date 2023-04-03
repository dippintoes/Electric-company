import mongoose from "mongoose"

export interface IMeter {
    _id?: string,
    type: string,
    rpu: number,
    default_pics: number
}

export const METER_TYPES = {
    NORMAL: new mongoose.mongo.ObjectId("642a8e05a2f5ec5dd8e252d4"),
    COMMERCIAL: new mongoose.mongo.ObjectId("642a8e1ba2f5ec5dd8e252d6"),
    SOLAR: new mongoose.mongo.ObjectId("642a8e28a2f5ec5dd8e252d8")
}