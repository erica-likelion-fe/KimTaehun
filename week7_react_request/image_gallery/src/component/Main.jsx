import { useState, useEffect } from "react"
import Button from "./Button.jsx";
import Card from "./Card.jsx";
import Modal from "./Modal.jsx";
import TextField from "./TextField.jsx";
import { Posts } from "../data/Posts.jsx"
import "../style/Main.css"

export default function Main({handleButtonClick}){
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const pageSize = 16;

    useEffect(() => {
        setPosts(Posts);
    }, []);

    const start = (page-1) * pageSize;
    const currentPosts = posts.slice(start, start + pageSize);


    return ( 
        <div className="main">
            <Button text="Create Post" isDisabled={false} handleButtonClick={handleButtonClick}/>
            <div className="main-post-div">
                <span className="main-title">Image</span>
                <div className="main-post-grid">
                    {
                        currentPosts.map(post => (
                            <Card 
                                key={post.id}
                                title={post.title}
                                content={post.content}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}