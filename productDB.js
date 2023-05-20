import dotenv from 'dotenv';
dotenv.config()
import connetDB from './DB/connect.js';
import FlightModel from './models/product.js';

//getting JSON data from product.js
import ProductJson from './product.json' assert { type: "json" };


const start = async()=>{
    try {
        await connetDB(process.env.DATABASE_URL);
        await FlightModel.create(ProductJson); // to add data run command 'node productDB.js'in terminal 
        console.log("Data created and added to database!!")
    } catch (error) {
        console.log(error)
    }
}

start();