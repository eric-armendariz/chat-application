import express from 'express';
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from './db/connectToMongoDB.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

//Used to parse user signup input
app.use(express.json()); 

//routes to signup/login/logout
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!!!")
});

app.listen(5000, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});

