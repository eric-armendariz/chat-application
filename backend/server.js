import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import messageRoutes from './routes/message.routes.js'
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from './db/connectToMongoDB.js';

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

//Routes for the user
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!!!")
});

app.listen(5000, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});

