import { Link } from "react-router-dom";
import style from "./blogsCard.module.css";

export const BlogCard = ({ title,id }) => {
    console.log(title,"title")
    return (
        <Link to={`/singleblog/${id}`}>
            <div className={style.blogCard}>
                <p className={style.title}>{title}</p>
            </div>
        </Link>
    )
}