import { useState, useEffect } from "react"
import React from "react";
import { Posts } from "../data/Posts.jsx"
import Main from "./Main.jsx"
import Modal from "./Modal.jsx"
import Posting from "./Posting.jsx"
import EditPosting from "./EditPosting.jsx";
import "../style/Page.css"

export default function Page(){
    const [posts, setPosts] = useState([]);
    const [lastPostId, setLastPostId] = useState(0);
    const [currentView, setcurrentView] = useState("main");
    const [showModal, setShowModal] = useState(false);
    const [modal, setModal] = useState('');

    useEffect(() => {
            setPosts(Posts);
    }, []);

    function handleButtonClick(buttonText, postId=0) {
        if (buttonText === "Create Post") {
            setcurrentView("createPost");
        }
        else if (buttonText === "Delete Post") {
            setShowModal(true);
            setModal(
                <Modal 
                alert_text={"Are you sure you want to\ndelete this post?"} 
                button_text="DELETE" 
                handleModalButtonClick={(e) => handleModalButtonClick(e, postId)}
                handleModalCloseClick={handleModalCloseClick}
                />
            )
        }
        else if (buttonText === "Edit Post") {
            setcurrentView("editPosting");
        }
    }

    
    function handleModalButtonClick(e, postId=0){
        if (e.target.value === "VIEW POST!") {
            setcurrentView("posting");
        }
        else if (e.target.value === "DELETE") {
            setPosts(posts.filter(post => post.id != postId));
            setcurrentView("main");
        }
        setShowModal(false);
    }
    function handleModalCloseClick(e) {
        setShowModal(false);
    }

    function handleSubmitPost({postId, imgUrl, title, description, date}){
        if (postId === 0){ // by creating post
            setLastPostId(posts.length+1);
            setPosts([...posts, {id: posts.length + 1, date: date, title: title, content: description, imgUrl: imgUrl}]);
            setModal(
            <Modal 
            alert_text={"Post published!\n Do you want to see it?"} 
            button_text="VIEW POST!" 
            handleModalButtonClick={handleModalButtonClick}
            handleModalCloseClick={handleModalCloseClick}
            />);
            setShowModal(true);
        }
        else { // by edting post
            const post = posts.find((post) => post.id === postId);
            post.title = title;
            post.date = date;
            post.imgUrl = imgUrl;
            post.content = description;
            setModal(
            <Modal 
            alert_text={"Post successfully edited.\n See changes?"} 
            button_text="VIEW POST!" 
            handleModalButtonClick={handleModalButtonClick}
            handleModalCloseClick={handleModalCloseClick}
            />);
            setShowModal(true);

        }
    }

    function handleCardClick(post_id) {
        setLastPostId(post_id);
        setcurrentView("posting");
    }

    function handleBackClick(){
        setcurrentView("main");
    }

    function Article(){
        if (currentView === "main") {
            return (<Main posts={posts} handleButtonClick={handleButtonClick} handleCardClick={handleCardClick}/>)
        }
        else if (currentView === "createPost") {
            return (<EditPosting posts={posts} handleButtonClick={handleButtonClick} handleSubmitPost={handleSubmitPost}/>)
        }
        else if (currentView === "posting"){
            return <Posting posts={posts} postId={lastPostId} handleButtonClick={handleButtonClick} handleBackClick={handleBackClick}/>
        }
        else if (currentView === "editPosting"){
            return <EditPosting posts={posts} postId={lastPostId} handleButtonClick={handleButtonClick} handleSubmitPost={handleSubmitPost}/>
        }
    }

    return (
        <div id="page">
            <span id="title">Image Gallery</span>
            <Article />
            {showModal && (
                <>
                    <div className="modal-open" />
                    {modal}
                </>
            )}
        </div>

    )
}