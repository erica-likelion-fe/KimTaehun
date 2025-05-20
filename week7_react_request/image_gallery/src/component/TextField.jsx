import React, { useState } from "react"
import '../style/TextField.css';

export default function TextField( {text} ) {
    const [value, setValue] = useState("");
    
    return (
        <input className={["text-field", value && "text-filled"].filter(Boolean).join(" ")}
            type="text" 
            placeholder={text} 
            onChange={e => setValue(e.target.value)}
            value={value}
            ></input>
    );
}