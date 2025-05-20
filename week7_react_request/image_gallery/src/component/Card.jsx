import React from "react"
import '../style/Card.css';

export default function Card( {img, title, content, handleCardClick} ) {
    function onCardClick(e) {
        handleCardClick(e);
    }
    
    return (
        <div className="card" onClick={onCardClick}>
            <div className="card-img">{img}</div>
            <div className="card-text-field">
                <span className="card-title">
                    {title}
                </span>
                <span className="card-content">
                    {content}
                </span>
            </div>
        </div>
    );
}