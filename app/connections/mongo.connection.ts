import { connect } from "mongoose";

export const connect_to_mongo=async ()=>{
    try{
        const {MONGO_URL} = process.env;
        await connect(MONGO_URL||"");
        console.log("Successfully connected");
        return true;
    }
    catch(e){
        throw {message:"Could not connect to mongodb",error:e};
    }
}