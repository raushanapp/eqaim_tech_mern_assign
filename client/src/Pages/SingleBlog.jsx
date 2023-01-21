import { useParams } from "react-router-dom"


export const SingleBlog = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            single
        </div>
    )
}