import React, { useState } from "react"
import '../style/TextField.css';

export default function TextField( {isTextArea=false, value, onChange, isDisabled, placeholder} ) {
    
    const classes = ["text-field", value && "text-filled"].filter(Boolean).join(" ");

    if (isTextArea) {
        return (
            <textarea className={classes + " text-area"} placeholder={placeholder} onChange={onChange} value={value} disabled={false} rows="3"/>
        )
    }
    else {
        return (
            <input className={classes}
            type="text" 
            placeholder={placeholder} 
            onChange={onChange}
            value={value}
            disabled={isDisabled} />
        )
    }
}