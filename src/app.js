const express = require("express");
const User = require("./models/user");
require("./db/mongoose");
const bodyParser = require('body-parser');

const cors = require("cors")
const userRouter = require("./routers/user");

const app = express();
app.use(express.static('public'));
app.use(cors());
//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(userRouter);


module.exports = app
const port= process.env.PORT || 3000;

