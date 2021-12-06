const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const apiRouter = require("./api");

const app = express();
const port = process.env.PORT || 3001;

// Configuring Cors & handling preflight requests
app.use(cors({
    origin: `${process.env.NODE_ENV === "production" ?
        "https://kubrysh-react-blog-app.herokuapp.com" : "http://localhost:3000"
    }`,
    methods: [ "GET", "HEAD", "PUT", "PATCH", "POST", "DELETE" ],
    allowedHeaders: "Content-Type",
    preflightContinue: false,
    optionsSuccessStatus: 204
}));
app.use(bodyParser.json());

app.use("/api", apiRouter);

app.get("*", (req, res) => {
    res.status(404).send("Error: Not Found");
});

// Error Logger
app.use((err, req, res, next) => {
    console.error(err.stack);
    next(err);
});

// Error Handler
app.use((err, req, res, next) => {
    res.status(500).send(`Error occured: ${err.message}`);
});

app.listen(port, () => {
    console.log(`Node API app listening at localhost:${port}`);
});

// Connecting to DB
const uri = process.env.MONGODB_URI || "mongodb://admin:password@localhost:27017/blogDB"

const dbConnect = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (error) {
        console.error(error);
    }
}

dbConnect();

mongoose.connection
    .once("open", () => {
        console.log(`Connected to ${
            process.env.NODE_ENV === "production" ? "production" : "development"
        } MongoDB instance`);
    })
    .on("error", err => console.error(err));
