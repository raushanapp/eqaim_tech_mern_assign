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
    let { page, limit } = req.query;
    try {
        let totalLimit = limit || 3;
        let skip = (page - 1) * totalLimit;

        const blogs = await Blog.find().skip(skip).limit(totalLimit).lean().exec();
        const totals = await Blog.find().countDocuments().lean().exec();
        const titleConveToUpperCase = blogs.map(({_id,title,post}) => {
            return {
                _id,
                title: title?.toUpperCase(),
                post
           }
        })
        
        //  console.log(titleConveToUpperCase)
        res.status(200).json({
            success: true,
            blogs: titleConveToUpperCase,
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
        const blog = await Blog.findById({ _id: id });
        const upperCaseTitle = {
            _id:blog._id,
            title: blog.title.toUpperCase(),
            post:blog.post
        }
        // console.log(upperCaseTitle)
        res.status(200).json({
            success: true,
            blog: upperCaseTitle
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