import React from "react";
import "../style/Content.css"

export default function Content({posts, select}){
    const post = posts.filter(post => post.name === select);
    return (
        <div className="content">
            <p className="content-name">{post[0].name}</p>
            <hr className="content-sep"/>
            <p className="content-content">{post[0].content}</p>
        </div>
    );
}