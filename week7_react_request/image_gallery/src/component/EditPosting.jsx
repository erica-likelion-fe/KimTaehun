import { useState } from "react"
import Button from "./Button.jsx";
import TextField from "./TextField.jsx";
import {ReactComponent as ArrowLeft} from "../asset/material-symbols-light_keyboard-arrow-left.svg"
import FileUploadZone from "./FileUploadZone.jsx";

export default function EditPosting({posts, postId = 0, handleButtonClick, handleSubmitPost, handleBackClick, isDisabled}){
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
    
    function onNavLeftClick(){
        handleBackClick();
    }

    return ( 
        <form className="edit-posting" onSubmit={onSubmit}>
            <div className="edit-posting-nav">
                <div className="edit-posting-arrow-left" onClick={onNavLeftClick}><ArrowLeft /></div>
            </div>
            <div className="edit-posting-div">
                <FileUploadZone imgUrl={imgUrl} onFileSelected={handleFileSelected}/>
                <div className="edit-posting-form-items">
                    <span className="edit-posting-item-title">Title *</span>
                    <TextField value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Text" isDisabled={isDisabled}/>
                    <span className="edit-posting-item-message">*Please enter no more than 20 characters.</span>
                </div>
                <div className="edit-posting-form-items">
                    <span className="edit-posting-item-title">Description *</span>
                    <div></div>
                    {postId === 0 ? (<TextField value={description ?? ""} onChange={(e) => setDescription(e.target.value)} placeholder="Text" isDisabled={isDisabled}/>
                    ):(<TextField isTextArea={true} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Text" isDisabled={isDisabled}/>)}
                    <span className="edit-posting-item-message">*Please enter no more than 200 characters.</span>
                </div>
            </div>
                    {postId === 0 ? (<Button type="submit" text="Submit Post" isDisabled={isDisabled} handleButtonClick={handleButtonClick}/>
                    ):(<Button type="submit" text="Changes Saved" isDisabled={isDisabled} handleButtonClick={handleButtonClick}/>)}
        </form>
    );
}