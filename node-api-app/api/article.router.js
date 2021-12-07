const express = require("express");
const fs = require("fs/promises");

const router = express.Router();

router.get("/", async (req, res, next) => {

    try {
        // Reading hardcoded articles file DB
        const rawData = await fs.readFile("./articles.db.json", "utf-8");
        const parsedData = JSON.parse(rawData);
        console.log("Reading articles.db.json file...");

        res.json({
            articles: parsedData.articles,
            count: parsedData.articles.length
        })
    } catch (error) {
        next(error);
    }

});

router.post("/", async (req, res, next) => {

    try {
        // Reading hardcoded articles DB
        const rawData = await fs.readFile("./articles.db.json", "utf-8");
        const data = JSON.parse(rawData);
        console.log("Reading articles.db.json file...");

        // Adding ID, Date, random likes & photo to the new article
        const reqData = {
            ...req.body,
            articleId: data.articles.length + 1,
            articleDate: Date.now(),
            authorPhoto: `https://randomuser.me/api/portraits/${ Math.round(Math.random()) ? "women" : "men" }/${ Math.floor(Math.random() * 100) }.jpg`,
            likes: Math.floor(Math.random() * 1001)
        };

        // Pushing new data to the beginning of an array
        data.articles.unshift(reqData);

        // Writing object with new data to hardcoded articles DB
        fs.writeFile("./articles.db.json", JSON.stringify(data));
        console.log("Adding new article to articles.db.json file...");

        res.sendStatus(201);
    } catch (error) {
        next(error);
    }

});

router.get("/:id", async (req, res, next) => {

    try {
        // Reading hardcoded articles file DB
        const rawData = await fs.readFile("./articles.db.json", "utf-8");
        const parsedData = JSON.parse(rawData);
        console.log("Reading articles.db.json file...");

        const article = parsedData.articles.find((el) => el.articleId === parseInt(req.params.id));

        if (article) {
            res.json({ ...article });
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        next(error);
    }

});

module.exports = router;
