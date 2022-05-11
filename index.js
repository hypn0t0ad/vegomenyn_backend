//Export dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();
const db = require("./db");
const router = require("./routes");

//Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//cors
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(cors());

//Routes
//Adress after the main adress is "api"
app.use("/api", router);

//Connect to DB
db.connect();

//Start server
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});