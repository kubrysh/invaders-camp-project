import mongoose from "mongoose";
const { Schema } = mongoose;

const tagSchema = new Schema({
    name: { type: String, required: true, unique: true },
    articles: [{ type: Schema.Types.ObjectId, ref: "Article" }]
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
