const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    post: { type: String, required: true }
    
}, {
    versionKey: false,
    timestamps: true
});

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
