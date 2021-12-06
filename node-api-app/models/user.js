import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    isEmailVerified: { type: Boolean, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true, lowercase: true },
    photoLink: { type: String },
    isAdmin: { type: Boolean, required: true },
    password: { type: String, required: true },
    dateRegistered: { type: Date, default: Date.now, required: true },
    likedArticles: [{ type: Schema.Types.ObjectId, ref: "Article" }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
