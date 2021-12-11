const express = require("express");
const fs = require("fs/promises");

const router = express.Router();

router.get("/", async (req, res, next) => {

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

router.post("/", async (req, res, next) => {

    try {
        // Reading hardcoded posts DB
        const rawData = await fs.readFile("./posts.db.json", "utf-8");
        const data = JSON.parse(rawData);
        console.log("Reading posts.db.json file...");

        // Adding ID, Date, random likes & photo to the new post
        const reqData = {
            ...req.body,
            postId: data.posts.length + 1,
            postDate: Date.now(),
            authorPhoto: `https://randomuser.me/api/portraits/${ Math.round(Math.random()) ? "women" : "men" }/${ Math.floor(Math.random() * 100) }.jpg`,
            likes: Math.floor(Math.random() * 1001)
        };

        // Pushing new data to the beginning of an array
        data.posts.unshift(reqData);

        // Writing object with new data to hardcoded posts DB
        fs.writeFile("./posts.db.json", JSON.stringify(data));
        console.log("Adding new post to posts.db.json file...");

        res.sendStatus(201);
    } catch (error) {
        next(error);
    }

});

router.get("/:id", async (req, res, next) => {

    try {
        // Reading hardcoded posts file DB
        const rawData = await fs.readFile("./posts.db.json", "utf-8");
        const parsedData = JSON.parse(rawData);
        console.log("Reading posts.db.json file...");

        const post = parsedData.posts.find((el) => el.postId === parseInt(req.params.id));

        if (post) {
            res.json({ ...post });
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        next(error);
    }

});

module.exports = router;
