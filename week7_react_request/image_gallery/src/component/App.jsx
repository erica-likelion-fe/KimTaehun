import React from "react";
import Button from "./Button.jsx";
import Card from "./Card.jsx";
import Modal from "./Modal.jsx";
import TextField from "./TextField.jsx";
import "../style/App.css";

export default function App() {
  return (
    <div>
      <Button text="Create Post" isDisabled={true}/>
    </div>
  );
}
