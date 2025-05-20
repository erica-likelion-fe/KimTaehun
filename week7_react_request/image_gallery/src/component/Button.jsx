import React from "react"
import '../style/Button.css';

export default function Button({ text, isDisabled, handleButtonClick }) {
    function onButtonClick(e){
        handleButtonClick(e.target.value);
    }

    return (
        <button type="button" className="button" onClick={onButtonClick} disabled={isDisabled} value={text}>{text}</button>
    );
}