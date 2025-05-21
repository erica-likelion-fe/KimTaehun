import React from "react"
import '../style/Button.css';

export default function Button({ text, type="button", postId=0, isDisabled, handleButtonClick }) {
    function onButtonClick(e){
        handleButtonClick(e.target.value, postId);
    }

    return (
        <button type={type} className="button" onClick={onButtonClick} disabled={isDisabled} value={text}>{text}</button>
    );
}