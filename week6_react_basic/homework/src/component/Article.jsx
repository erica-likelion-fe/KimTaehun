import React from "react";

import Create from "./Create.jsx";
import Delete from "./Delete.jsx";
import Content from "./Content.jsx";

export default function Article({ posts, mode, handleCreate, handleDelete }) {
    if (mode === "create"){
        return (<Create handleCreate={handleCreate}/>);
    }
    else if (mode === "delete"){
        return (<Delete posts={posts} handleDelete={handleDelete}/>);
    }
    else {
        return (<Content posts={posts} select={mode}/>);
    }
}