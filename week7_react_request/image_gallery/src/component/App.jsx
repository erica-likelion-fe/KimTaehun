import React, { useState } from "react";
import Button from "./Button.jsx";
import Card from "./Card.jsx";
import Modal from "./Modal.jsx";
import TextField from "./TextField.jsx";
import Main from "./Main.jsx"
import Page from "./Page.jsx"
import "../style/App.css";

export default function App() {
  const [page, setPage] = useState("main");
  
  function handleButtonClick(button_text) {
    if (button_text === "Create Post") {
      setPage("createPost");
    }
  }

  return (
    <div id="page">
      <span id="title">Image Gallery</span>
      <Page page={page} handleButtonClick={handleButtonClick}/>
    </div>
  );
}

/* <div>
      <Button text="Create Post" isDisabled={false} />
      <TextField text="Text" isDisabled={false} />
      <Modal alert_text={"Post published!\nDo you want to see it?"} button_text="VIEW POST!" />
      <Card title="Lorem ipsum" content="Lorem ipsum dolor sit amet consectetur. At dignissim orci et sapien. Massa lacus odio venenatis ipsum blandit."/>
    </div> */
