import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db";
import userRouter from './routes/route'

const app = express();
const PORT = 5000;

dotenv.config();
app.use(cors());
connectDB();

app.use("/",userRouter);

//Database Connection

app.listen(PORT, () => {
    console.log(`server is running sucessfully on port ${PORT} `);
});