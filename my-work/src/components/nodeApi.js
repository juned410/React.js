const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const car = require("./data");


app.get("/",(req,res)=>{
    res.send(car)
});

app.listen(3030)