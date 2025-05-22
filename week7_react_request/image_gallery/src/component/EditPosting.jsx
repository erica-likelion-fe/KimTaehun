import { useState } from "react"
import "../style/CreatePost.css"
import "../style/EditPosting.css"
import Button from "./Button.jsx";
import TextField from "./TextField.jsx";
import FileUploadZone from "./FileUploadZone.jsx";

export default function EditPosting({posts, postId = 0, handleButtonClick, handleSubmitPost}){
    const post = posts.find(e => (e.id === postId));
    
    const [imgUrl, setImgUrl] = useState(post ? post.imgUrl : null);
    const [title, setTitle] = useState(post ? post.title : "");
    const [description, setDescription] = useState( post ? post.content : "");

    function today() {
        const today = new Date();
        const year = String(today.getFullYear());
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        
        return year + "." + month + "." + day;
    }

    function onSubmit(e) {
        e.preventDefault();
        const date = today();

        handleSubmitPost({postId, imgUrl, title, description, date});
    }

    function handleFileSelected(files) {
        const file = files[0];
        if (!file) return;
        setImgUrl(URL.createObjectURL(file));
    }
    

    return ( 
        <form className="create-post" onSubmit={onSubmit}>
            <div className="create-post-div">
                <FileUploadZone imgUrl={imgUrl} onFileSelected={handleFileSelected}/>
                <div className="create-post-form-items">
                    <span className="create-post-item-title">Title *</span>
                    <TextField value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Text" isDisabled={false}/>
                    <span className="create-post-item-message">*Please enter no more than 20 characters.</span>
                </div>
                <div className="create-post-form-items">
                    <span className="create-post-item-title">Description *</span>
                    <div></div>
                    {postId === 0 ? (<TextField value={description ?? ""} onChange={(e) => setDescription(e.target.value)} placeholder="Text" isDisabled={false}/>
                    ):(<TextField isTextArea={true} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Text" isDisabled={false}/>)}
                    <span className="create-post-item-message">*Please enter no more than 200 characters.</span>
                </div>
            </div>
                    {postId === 0 ? (<Button type="submit" text="Submit Post" isDisabled={false} handleButtonClick={handleButtonClick}/>
                    ):(<Button type="submit" text="Changes Saved" isDisabled={false} handleButtonClick={handleButtonClick}/>)}
        </form>
    );
}