import { useState, useEffect } from "react"
import Button from "./Button.jsx";
import Card from "./Card.jsx";
import {ReactComponent as ArrowLeft} from "../asset/material-symbols-light_keyboard-arrow-left.svg"
import {ReactComponent as ArrowRight} from "../asset/material-symbols-light_keyboard-arrow-right.svg"
import "../style/Main.css"

export default function Main({posts, handleButtonClick, handleCardClick}){
    const [page, setPage] = useState(1);
    const pageSize = 16;

    const start = (page-1) * pageSize;
    const currentPosts = posts.slice(start, start + pageSize);
    const currentPageGroup = Math.floor((page-1) / 10);

    function onNavLeftClick(){
        const movePage = currentPageGroup > 0 ? currentPageGroup * 10 : 1;

        setPage(movePage);
    }

    function onNavRightClick(){
        const maxPage = Math.ceil(posts.length / pageSize);
        const maxPageGroup = Math.floor(maxPage / 10);
        
        const movePage = currentPageGroup < maxPageGroup ? (currentPageGroup + 1) * 10 + 1 : page;

        setPage(movePage);
    }

    function onNavClick(e){
        setPage(Number(e.currentTarget.dataset.value));
    }

    function Nav(){
        const navList = Array.from({ length: posts.length }, (_, i) => (
            {
                id: "page" + i+1,
                page: i+1,
            }
        ));

        return (
            <div className="nav">
                <div className="nav-arrow-left" onClick={onNavLeftClick}><ArrowLeft /></div>
                <div className="nav-page-div">
                    {
                        navList.slice(currentPageGroup * 10, currentPageGroup === 0 ? 10 : currentPageGroup * 10 + 10 ).map((e) => 
                            (<div key={e.id} className={["nav-page-text", page === e.page && "nav-page-active"].filter(Boolean).join(" ")} data-value={e.page} onClick={onNavClick}>{e.page}</div>))
                    }
                </div>
                <div className="nav-arrow-right" onClick={onNavRightClick}><ArrowRight /></div>
            </div>
        );
        
    }



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
                                imgUrl={post.imgUrl}
                                id={post.id}
                                title={post.title}
                                content={post.content}
                                handleCardClick={handleCardClick}
                            />
                        ))
                    }
                </div>
            </div>
            <Nav />
        </div>
    );
}