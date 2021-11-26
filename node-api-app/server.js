const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const apiRouter = require("./api");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
    origin: `${process.env.NODE_ENV === "production" ?
        "https://kubrysh-react-blog-app.herokuapp.com" : "http://localhost:3000"
    }`
}));
app.use(bodyParser.json());

app.use("/api", apiRouter);

app.get("*", (req, res) => {
    res.status(404).send("Error: Not Found");
});

// Error Loger
app.use((err, req, res, next) => {
    console.error(err.stack);
    next(err);
});

// Error Handler
app.use((err, req, res, next) => {
    res.status(500).send(`Error occured: ${err.message}`);
});

app.listen(port, () => {
    console.log(`Node API app listening at localhost:${port}`)
});
