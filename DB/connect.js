import dotenv from 'dotenv';
dotenv.config()
import mongoose from "mongoose";


const connectDB = async( DATABASE_URL) =>{
    try {
        const DB_OPTIONS = {
            dbname: process.env.DB_NAME,
        };
        // console.log(process.env.DB_NAME)
        await mongoose.connect(DATABASE_URL, DB_OPTIONS,), 
        console.log("Database connected Successfully!");
    } catch (error) {
        console.log(error)
        
    }
};

export default connectDB;