const mongoose = require("mongoose");
const Article = require("../models/article");
const User = require("../models/user");

class ArticleService {
    constructor() {}

    pipeline = [
        { $lookup: {
            from: "users",
            localField: "author",
            foreignField: "_id",
            as: "authorData"
        }},
        { $unwind: "$authorData" },
        { $project: {
            _id: 0,
            articleId: 1,
            title: 1,
            body: 1,
            date: 1,
            "author": { "$concat": ["$authorData.firstName", " ", "$authorData.lastName"] },
            "authorPhoto": "$authorData.photoLink",
            "likes": { "$size": "$likes" }
        }}
    ]

    async list() {
        return await Article.aggregate([
            ...this.pipeline,
            { $sort: { date: -1 } }
        ]);
    }

    async find(id) {
        const response = await Article.aggregate([
            { $match: { articleId: id }  },
            ...this.pipeline
        ]);
        return response[0];
    }

    async create(data) {

        //getting the amount of articles for id
        const amount = await Article.countDocuments();

        //creating the author of the article & writing to DB
        const author = new User(
            {
                _id: new mongoose.Types.ObjectId(),
                email: data.email,
                isEmailVerified: true,
                firstName: data.firstName,
                lastName: data.lastName,
                photoLink: `https://randomuser.me/api/portraits/${ Math.round(Math.random()) ? "women" : "men" }/${ Math.floor(Math.random() * 100) }.jpg`,
                isAdmin: false,
                password: "",
                dateRegistered: Date.now(),
                likedArticles: []
            }
        );

        const createdUser = await author.save();

        //creating the article & writing to DB
        const createdArticle = await Article.create(
            {
                title: data.title,
                body: data.body,
                articleId: amount + 1,
                date: Date.now(),
                author: author._id,
                comments: [],
                tags: [],
                likes: []
            }
        );
        
        return [createdUser, createdArticle];
    }

}

module.exports = ArticleService;
