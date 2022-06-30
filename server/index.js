const path = require("path");
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const moment = require('moment');

const app = express();

app.use(cors());

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assignments')
    },
    filename: (req, file, cb) => {
        cb(null, moment().format("llll") + " - " + file.originalname)
    }});

const upload = multer({ storage: fileStorageEngine });


app.post('/single', upload.single("assignment"), (req, res) => {
    console.log('file: ', req.file);
    res.send("File upload successful.")
})

.get('*', (req, res) => {
    res
        .status(404)
        .json({
        status: 404,
        message: 'This is obviously not the page you are looking for.',
        });
    })

app.listen(4000);
console.log('Node server running on port 4000');