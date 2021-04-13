import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import artRoutes from './routes/article.js';
import authRoutes from './routes/authRoutes.js';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT||5000;

app.use(bodyParser.json({limit:"30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(express.static(path.join("./build")));
app.use(cors());



app.get("/", (req,res)=>{
    res.sendFile("./build/index.html");
});
app.use('/art',artRoutes);
app.use('/auth',authRoutes);


mongoose.connect(process.env.DB_URL, {useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false} ).
then(()=> console.log('database is connected') ).
catch((error)=>{
    console.log(error)
})

app.listen(PORT, console.log(`app is running at ${PORT}`))