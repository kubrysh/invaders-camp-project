const express = require("express");
const ArticleService = require("./article.service");

const router = express.Router();
const articleService = new ArticleService();

router.get("/", async (req, res, next) => {

    try {
        // Getting articles from DB
        const articles = await articleService.list();

        res.json({
            articles: articles,
            count: articles.length
        })
    } catch (error) {
        next(error);
    }

});

router.post("/", async (req, res, next) => {

    // Writing article & author to DB
    try {
        const [createdUser, createdArticle] = await articleService.create(req.body);
        res.sendStatus(201);
    } catch (error) {
        next(error);
    }

});

router.get("/:id", async (req, res, next) => {

    try {
        // Getting article by id from DB
        const article = await articleService.find(parseInt(req.params.id));

        if (article) {
            res.json(article);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        next(error);
    }

});

module.exports = router;
