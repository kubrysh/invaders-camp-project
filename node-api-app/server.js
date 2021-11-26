const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
    origin: `${process.env.NODE_ENV === "production" ?
        "https://kubrysh-react-blog-app.herokuapp.com" : "http://localhost:3000"
    }`
}));

app.listen(port, () => {
    console.log(`Node API app listening at localhost:${port}`)
});
