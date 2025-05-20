import React from "react";
import Main from "./Main.jsx"

export default function Page({page, handleButtonClick}){


    if (page === "main") {
        return (<Main handleButtonClick={handleButtonClick}/>)
    }
    else if (page === "posting") {
        return (<></>)
    }
}