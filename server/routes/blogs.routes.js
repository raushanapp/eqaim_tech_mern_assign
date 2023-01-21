const express = require("express");
const { createBlogPost, getAllBlogPost, getSingleBlogPost } = require("../controller/blogs");

const router = express.Router();
//  create post

router.post("/create", createBlogPost);

// get all post 
router.get("/", getAllBlogPost);
// get by id single blog
router.get("/:id", getSingleBlogPost);

module.exports = router;
