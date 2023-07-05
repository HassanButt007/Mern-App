const express = require('express');
const ClientController = require("./controller/form.controller")
const cors = require('cors');
var bodyParser = require('body-parser')
const app = express();
app.use(express.json());
const port = 5000;



//Mongoose Connection
require("./db/dbcon");

app.use(express.urlencoded({ extended: true }));

//Cors for Connection Backend with Frontend
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

//Post API for Saving Data
app.use("/formData", ClientController);

app.use("/upload", express.static("upload"));



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});