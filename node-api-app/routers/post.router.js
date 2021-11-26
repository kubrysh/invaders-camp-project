const express = require("express");
const fs = require("fs/promises");

const router = express.Router();

router.get('/', async (req, res) => {

    //Reading hardcoded posts DB

    let parsedData = {};

    try {
        const rawData = await fs.readFile("./posts.db.json", "utf-8");
        parsedData = JSON.parse(rawData);
        console.log("Reading posts.db.json file...");
    } catch (error) {
        console.error('There was an error:', error.message);
    }

    res.json({
        posts: parsedData.posts,
        count: parsedData.posts.length
    })
});

router.post('/', async (req, res) => {

    try {
        //Reading hardcoded posts DB
        const rawData = await fs.readFile("./posts.db.json", "utf-8");
        const data = JSON.parse(rawData);
        console.log("Reading posts.db.json file...");
        data.posts.push(req.body);
        //Writing to hardcoded posts DB
        fs.writeFile("./posts.db.json", JSON.stringify(data));
        console.log("Adding new post to posts.db.json file...");
    } catch (error) {
        console.error('There was an error:', error.message);
    }

    res.sendStatus(201);
});

module.exports = router;
