import express from "express";
import { registerRoutes } from "./routes/route.routes";
import { connect_to_mongo } from "./connections/mongo.connection";

export const startServer=async ()=>{ 
   try{
    const app=express();
    await connect_to_mongo();
    registerRoutes(app);
    const {PORT}= process.env;
    app.listen(PORT||4321,()=>{
        console.log(`Server is started on port ${PORT||4321}`);
    })
   }
   catch(e){
    console.log("Could not connect to server",e);
    process.exit(1);
   }
}