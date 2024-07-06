import express from 'express';
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from './db/connectToMongoDB.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hello World!!!")
});

app.use("/api/auth", authRoutes)

app.listen(5000, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});

