import React from "react";
import { useState } from "react";
import "../style/App.css";

import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Article from "./Article.jsx";

export default function App() {
    const [posts, setPosts] = useState([ 
        {name:"HTML", content:"웹페이지의 구조(뼈대)를 정의하는 마크업 언어"}, 
        {name:"CSS", content:"웹페이지의 스타일(색, 글꼴, 레이아웃 등)을 지정하는 언어"}, 
        {name:"JS", content:"웹페이지에 동적인 기능(인터랙션, 데이터 처리 등)을 추가하는 프로그래밍 언어"}, 
        {name:"React", content:"사용자 인터페이스(UI)를 만들기 위한 컴포넌트 기반의 JavaScript 라이브러리"}
    ]);
    const [mode, setMode] = useState("create");

    function handleCreate(name, content) {
        const newPost = {name:name, content:content};
        setPosts([...posts, newPost]);
    }

    function handleDelete(name){
        const newPost = posts.filter(post => post.name !== name);
        setPosts(newPost);
    }

    function handleNavClick(name) {
        if (name === "create"){
            setMode("create");
        }
        else if (name === "delete"){
            setMode("delete");
        }
        else {
            setMode(name);
        }
    }

    return (
        <div className="app">
            <Header />
            <Nav posts={posts} handleNavClick={handleNavClick}/>
            <Article posts={posts} mode={mode} handleCreate={handleCreate} handleDelete={handleDelete} />
        </div>
    );
}


