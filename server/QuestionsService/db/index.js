import mongoose from "mongoose";

const connectDb = async()=>{
    await mongoose.connect(process.env.DB_ID)
    console.log("Connected to MongoDB")
}

export{connectDb}