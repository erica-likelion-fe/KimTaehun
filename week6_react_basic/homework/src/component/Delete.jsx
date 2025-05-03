import React from "react";
import { useState } from "react";
import "../style/Delete.css"

export default function Delete({ posts, handleDelete }){
    const [deleteName, setDeleteName] = useState("");

    function onDeleteClick(e){
        e.preventDefault();
        if ((posts.filter((post) => post.name === deleteName)).length !== 0){
            handleDelete(deleteName);
        }
        else {
            alert("해당 이름은 없는 값입니다! 다시 입력해주세요.");
        }
    }

    return (
        <form className="delete" onSubmit={onDeleteClick}>
            <input 
            className="delete-txt"
            type="text"
            value={deleteName}
            placeholder="삭제하고 싶은 이름을 입력해주세요."
            autoFocus
            onChange={(e) => setDeleteName(e.target.value)}/>
            <button type="submit" className="delete-btn">삭제</button>
        </form>
    );
}