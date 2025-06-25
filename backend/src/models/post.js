import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name: {type: String, require: true},
    prompt: {type: String, require: true},
    photo: {type: String, require: true}
}, {timestamps: true});

export const Post = mongoose.model('Post',postSchema)