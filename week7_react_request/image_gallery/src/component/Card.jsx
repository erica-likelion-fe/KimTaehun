import React from "react"
import '../style/Card.css';

export default function Card( {imgUrl, id, title, content, handleCardClick} ) {
    function onCardClick(e) {
        handleCardClick(Number(e.currentTarget.dataset.value));
    }
    
    return (
        <div className="card" onClick={onCardClick} data-value={id}>
            <div className="card-img-div">
                {imgUrl && (
                <img className="card-img" src={imgUrl} alt="post img"/>)}
            </div>
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