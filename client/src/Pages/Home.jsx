import { useState } from "react";
import style from "./home.module.css";
import axios from "axios";
import { useEffect } from "react";
import { BlogCard } from "../Components/BlogCard";
import { Link } from "react-router-dom";
import {AiOutlineFileAdd} from "react-icons/ai"
export const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    let [totalPage, setTotalPage] = useState(0);
    // const [disable, setDisable] = useState(false);
    const getAllBlogs = () => {
        axios.get(`http://localhost:2300/blogs?page=${page}&limit=3`)
            .then((res) => {
                // console.log(res.data)
                setBlogs(res.data.blogs)
                setTotalPage(res.data.totalBlogs)
            })
            .catch((error) => setBlogs({ error: error.message }))
    };
    const handlePageChange = (value) => {
        setPage(pre => pre + value);
    }
    
    useEffect(() => {
        if (blogs?.length === 0) {
            getAllBlogs();
        }
        page&&getAllBlogs();
    }, [page]);
    // console.log(blogs,page)
    return (
        <div className={style.homeMain}>
            <div className={style.headerDiv}>
                <h1 className={style.header}>Eqaim Blog</h1>
            </div>
            <div className={style.gridDiv}>
                {blogs?.length>0&& blogs.map((data) => (
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
            <button
                onClick={() => handlePageChange(-1)}
                disabled={page===1}
            >
                Prev
            </button>
            <button onClick={()=>handlePageChange(1)} disabled={blogs.length<3}>Next</button>
        </div>
    )
}