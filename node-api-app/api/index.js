const express = require("express");

const articleRouter = require("./article.router");

const router = express.Router();

router.use("/articles", articleRouter);

module.exports = router;
