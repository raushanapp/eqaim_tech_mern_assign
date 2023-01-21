import { useState } from "react";
import style from "./home.module.css";
import axios from "axios";
import { useEffect } from "react";
import { BlogCard } from "../Components/BlogCard";
import { Link } from "react-router-dom";
import {AiOutlineFileAdd} from "react-icons/ai"
export const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const getAllBlogs = () => {
        axios.get('http://localhost:2300/blogs/')
            .then((res) => setBlogs(res.data.blogs))
            .catch((error) => setBlogs({ error: error.message }))
    };

    useEffect(() => {
        if (blogs?.length === 0) {
            getAllBlogs();
        }
    }, []);
    console.log(blogs)
    return (
        <div className={style.homeMain}>
            <div className={style.headerDiv}>
                <h1 className={style.header}>Eqaim Blog</h1>
            </div>
            <div className={style.gridDiv}>
                {blogs&& blogs.map((data) => (
                        <BlogCard key={data._id} title={data.title} id={data._id} />
                ))}
            </div>
            <Link to='/newblog'>
                <button className={style.newBlogWriteIcon}>
                    <AiOutlineFileAdd
                        style={{
                            fontSize: "40px",
                            fontWeight:"300"
                        }}
                    />
                </button>
            </Link>
        </div>
    )
}