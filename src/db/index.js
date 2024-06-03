import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv"




dotenv.config()

console.log(process.env)


const MongoDB = async ()=>{
     try {
        const connectionInsurts = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)
        
        

        console.log(`\n mongoDB connected !! DB host 
        ${connectionInsurts.connection.host}`)
        
     } 
     catch(error){
        console.error(`DATA BASE CONNECTION ERROR `, error )
        process.exit(1)
     }
    

}

export default MongoDB;