import { useState } from "react"
import "../style/CreatePost.css"
import "../style/EditPosting.css"
import Button from "./Button.jsx";
import TextField from "./TextField.jsx";
import FileUploadZone from "./FileUploadZone.jsx";

export default function EditPosting({posts, postId, handleButtonClick, handleSubmitPost}){
    const post = posts.find(e => (e.id === postId));

    const [imgUrl, setImgUrl] = useState(post.imgUrl);
    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(post.content);

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
                    <TextField value={title ?? ""} onChange={(e) => setTitle(e.target.value)} placeholder="Text" isDisabled={false}/>
                    <span className="create-post-item-message">*Please enter no more than 20 characters.</span>
                </div>
                <div className="create-post-form-items">
                    <span className="create-post-item-title">Description *</span>
                    <div></div>
                    <TextField isTextArea={true} value={description ?? ""} onChange={(e) => setDescription(e.target.value)} placeholder="Text" isDisabled={false}/>
                    <span className="create-post-item-message">*Please enter no more than 20 characters.</span>
                </div>
            </div>

            <Button type="submit" text="Changes Saved" isDisabled={false} handleButtonClick={handleButtonClick}/>
        </form>
    );
}