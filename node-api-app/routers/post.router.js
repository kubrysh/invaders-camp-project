const express = require("express");
const fs = require("fs/promises");

const router = express.Router();

router.get('/', async (req, res, next) => {

    try {
        // Reading hardcoded posts file DB
        const rawData = await fs.readFile("./posts.db.json", "utf-8");
        const parsedData = JSON.parse(rawData);
        console.log("Reading posts.db.json file...");

        res.json({
            posts: parsedData.posts,
            count: parsedData.posts.length
        })
    } catch (error) {
        next(error);
    }

});

router.post('/', async (req, res) => {

    try {
        // Reading hardcoded posts DB
        const rawData = await fs.readFile("./posts.db.json", "utf-8");
        const data = JSON.parse(rawData);
        console.log("Reading posts.db.json file...");

        // Adding ID to the new post
        const reqData = { ...req.body, postId: data.posts.length + 1 };

        // Pushing new data
        data.posts.push(reqData);

        // Writing object with new data to hardcoded posts DB
        fs.writeFile("./posts.db.json", JSON.stringify(data));
        console.log("Adding new post to posts.db.json file...");

        res.sendStatus(201);
    } catch (error) {
        next(error);
    }

});

module.exports = router;
