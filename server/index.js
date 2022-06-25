const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

import { data } from "src/data.js";
console.log(data)

app.get("/submission", (req,res) => {
    res.download("week-bg.jpg");
})

app.listen(3000);