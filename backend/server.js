import express from 'express';
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from './db/connectToMongoDB.js';
import messageRoutes from './routes/message.routes.js'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = 5000;

//Used to parse user signup input
app.use(express.json()); 

//Middleware so that we are able to access user cookies
app.use(cookieParser());

//routes to signup/login/logout
app.use("/api/auth", authRoutes);

//Routes to send and keep track of messages
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!!!")
});

app.listen(5000, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});

