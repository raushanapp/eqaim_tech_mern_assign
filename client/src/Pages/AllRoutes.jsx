import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { NewBlog } from "./NewBlog";
import { SingleBlog } from "./SingleBlog";

export const AllRoutes = () => {
    
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/newblog' element={<NewBlog/>} />
            <Route path='/singleblog/:id' element={<SingleBlog />} />
        </Routes>
    )
}