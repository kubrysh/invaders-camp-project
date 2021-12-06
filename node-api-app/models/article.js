import mongoose from "mongoose";
const { Schema } = mongoose;

const articleSchema = new Schema({
    articleId: { type: Number, required: true, unique: true },
    title: { type: String, required: true }, 
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    body: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
    comments: [{
        id: { type: Schema.Types.ObjectId, required: true, unique: true },
        body: { type: String, required: true },
        date: { type: Date, default: Date.now, required: true },
        author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    }],
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }]
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
