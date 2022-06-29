const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/submission", (req,res) => {
    res.download("week-bg.jpg");
})

app.listen(3000);