import { Link, useParams } from "react-router-dom"
import style from "./singleBlog.module.css";
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import {RiHome2Line} from "react-icons/ri"
export const SingleBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const getSingleBlog = () => {
        axios.get(`http://localhost:2300/blogs/${id}`)
            .then((res) => setBlog(res.data.blog))
            .catch((error) => setBlog(error))
    };

    useEffect(() => {
        getSingleBlog();
    },[])
    console.log(blog);
    return (
        <div className={style.singleBlogMain}>
            <div className={style.headerDiv}>
                <h1 className={style.header}>Eqaim Blog</h1>
            </div>
            <div className={style.card}>
                <div className={style.btnDiv}>
                    <Link to='/'>
                        <button className={style.btn}>
                            <RiHome2Line style={{
                                fontSize:"45px"
                            }}/>
                        </button>
                    </Link>
                </div>
                
                <div className={style.blogDiv}>
                    <h1 className={style.blogHeader}>{blog.title}</h1>
                    <p className={style.blogPost}>{blog.post}</p>
                </div>
            </div>
        </div>
    )
}