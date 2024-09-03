require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
require("./db/conn");
const router = require("./Routes/router");

app.use(cors());
app.use(express.json());

app.use(router);

app.get("/", (req, res)=>{
res.status(200).json("Hi! from Server");
});

app.listen(PORT, ()=>{
console.log(`Server running at http:/localhost/${PORT}`);
});