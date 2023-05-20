
import express from "express";
import user from './routes/products.js'
import connectDB from "./DB/connect.js";

const app = express();
const PORT = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE_URL;


app.get('/', (req, res)=>{
    res.send("server connected!")
})


//middleware or tp set router
app.use('/api/flights', user)
app.use(express.urlencoded({extended:false}))



const start = async() =>{

    try {
    await connectDB(DATABASE_URL);
    app.listen(PORT, () =>{
       console.log(`server connected at http://localhost:${PORT}`)  
    })
    } catch (error) {
        console.log(error)
    }
}

start();