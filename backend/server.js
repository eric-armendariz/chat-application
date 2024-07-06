const express = require("express");
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hello World!!!")
});

app.get("/api/auth/signup", (req, res) => {
    console.log("signup route");
});

app.get("/api/auth/login", (req, res) => {
    console.log("login route");
});

app.get("/api/auth/logout", (req, res) => {
    console.log("logout route");
});

app.listen(5000, () => console.log("Server Running on port 5000"));