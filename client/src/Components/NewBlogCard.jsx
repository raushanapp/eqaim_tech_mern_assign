import style from "./newBlogCard.module.css";

export const NewBlogCard = ({title,post}) => {
    
    return (
        <div className={style.newBlogDiv}>
            <h1 className={style.newHeader}>{title}</h1>
            <p className={style.newPost}>{post}</p>

        </div>
    )
}