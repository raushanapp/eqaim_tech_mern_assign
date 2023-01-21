const Blog = require("../models/blog.models");

// create  blog post

const createBlogPost = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json({
            success: true,
            blog: blog
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
};

// get all post

const getAllBlogPost = async (req, res) => {
    try {
        const blogs = await Blog.find().lean().exec();
        const totals = await Blog.find().countDocuments().lean().exec();
        // console.log(totals);
        res.status(200).json({
            success: true,
            blogs: blogs,
            totalBlogs:totals
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
};

// get by id 
const getSingleBlogPost = async (req, res) => {
    const id = req.params.id;
    try {
        const blog = await Blog.findById({_id:id});
        res.status(200).json({
            success: true,
            blog: blog
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
};

module.exports = {
    createBlogPost,
    getAllBlogPost,
    getSingleBlogPost
}