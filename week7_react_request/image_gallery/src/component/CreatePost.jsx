import { useState } from "react"
import "../style/CreatePost.css"
import Button from "./Button.jsx";
import TextField from "./TextField.jsx";
import FileUploadZone from "./FileUploadZone.jsx";

export default function CreatePost({handleButtonClick, handleSubmitPost}){
    const [imgUrl, setImgUrl] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function today() {
        const today = new Date();
        const year = String(today.getFullYear());
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        
        return year + "." + month + "." + day;
    }

    function onSubmit(e) {
        const date = today();
        e.preventDefault();

        handleSubmitPost({imgUrl, title, description, date});
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
                    <TextField value={description ?? ""} onChange={(e) => setDescription(e.target.value)} placeholder="Text" isDisabled={false}/>
                    <span className="create-post-item-message">*Please enter no more than 20 characters.</span>
                </div>
            </div>

            <Button type="submit" text="Submit Post" isDisabled={false} handleButtonClick={handleButtonClick}/>
        </form>
    );
}