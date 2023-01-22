import style from "./newBlog.module.css";
import axios from "axios"
import { useState, useEffect } from "react";
import { RiHome2Line } from "react-icons/ri";
import { BsClipboardCheck } from "react-icons/bs";
import { FiBold } from "react-icons/fi";
import { GrLink } from "react-icons/gr";
import { BsListUl } from "react-icons/bs";
import { MdTextFormat } from "react-icons/md";
import { BsTypeStrikethrough } from "react-icons/bs";
import { RxUnderline } from "react-icons/rx";
import {FiItalic} from "react-icons/fi"

import { Link } from "react-router-dom";
import { NewBlogCard } from "../Components/NewBlogCard";

export const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const [firstWrite, setFirstWrite] = useState(true);

    const createPost = () => {
        axios.post("http://localhost:2300/blogs/create", {
            title: title,
            post: post
        }).then((res) => console.log(res.data))
        .catch((err) => console.log(err));
        setFirstWrite(false);
        // setTitle("");
        // setPost("");
    };

   
    
    return (
        <div className={style.newBlogDiv}>
            <div className={style.headerDiv}>
                <h1 className={style.header}>Eqaim Blog</h1>
            </div>
            {/* editing part */}
            <div className={style.editMain}>
                <div className={style.btnDiv} >
                    <Link to='/'>
                        <button className={style.homeBtn}>
                            <RiHome2Line
                             style={{
                             fontSize:"45px"
                             }}
                            />
                        </button>
                    </Link>
                    <button
                        className={style.publishBtn}
                        onClick={createPost}
                    >
                        <BsClipboardCheck
                            style={{
                                fontSize:"45px"
                            }}
                        />
                   </button>
                </div>
                {/* input and text area */}
                <div className={style.blogWrite}>
                    <div className={style.editNav}>
                        <button className={style.boldBtn}>
                            <FiBold fontSize="22px" />
                        </button>
                        <button className={style.italicBtn}>
                            <FiItalic fontSize="22px"/>
                        </button>
                        <button className={style.underlineBtn}>
                            <RxUnderline fontSize="22px"/>
                        </button>
                        <button className={style.strikeBtn}>
                            <BsTypeStrikethrough fontSize="22px"/>
                        </button>
                        <button className={style.textFormatBtn}>
                            <MdTextFormat fontSize="22px"/>
                        </button>
                        <button className={style.listBtn}>
                            <BsListUl fontSize="22px"/>
                        </button>
                        <button className={style.linkBtn}>
                            <GrLink fontSize="22px" />
                        </button>
                    </div>
                    {/* text area and input title */}
                    {firstWrite ? (
                        <div className={style.textAreaDiv}>
                            <input type="text"
                                placeholder="Enter blog title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className={style.inputText}
                            />
                            <textarea
                                name="post"
                                className={style.textArea}
                                cols="85"
                                rows="20"
                                placeholder="write post herer..."
                                value={post}
                                onChange={(e)=>setPost(e.target.value)}
                            />
                        </div>
                    ):(<NewBlogCard title={title} post={post} />)}
                    
                </div>
            </div>
        </div>
    )
}