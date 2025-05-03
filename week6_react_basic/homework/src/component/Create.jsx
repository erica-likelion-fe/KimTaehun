import React from "react";
import { useState } from "react";
import '../style/Create.css';

export default function Create({ handleCreate }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleCreate(name, content);
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <input
        className="name-txt"
        type="text"
        value={name}
        placeholder='이름 입력'
        autoFocus
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="content-txt"
        rows="5"
        value={content}
        placeholder="내용을 입력하세요."
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="submit-btn">추가하기</button>
    </form>
  );
}

