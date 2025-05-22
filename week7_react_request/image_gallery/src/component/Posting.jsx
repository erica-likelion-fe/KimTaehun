import Button from "./Button";
import {ReactComponent as ArrowLeft} from "../asset/material-symbols-light_keyboard-arrow-left.svg"
import "../style/Posting.css"

export default function Posting({posts, postId, handleButtonClick, handleBackClick, isDisabled}) {
    const post = posts.find(e => (e.id === postId));
    function onNavLeftClick(){
        handleBackClick();
    }

    return ( 
        <div>
            <div className="posting-nav">
                <div className="posting-arrow-left" onClick={onNavLeftClick}><ArrowLeft /></div>
            </div>
            <div className="posting-div">
                <div className="posting-area">
                    <div className="posting-img-title-date">
                        <div className="posting-img-div">
                            {post.imgUrl && <img className="posting-img" src={post.imgUrl} alt="Preview" /> }
                        </div>
                        <div className="posting-title-date">
                            <span className="posting-title">{post.title}</span>
                            <span className="posting-date">{post.date}</span>
                        </div>
                    </div>
                    <span className="posting-content">{post.content}</span>
                </div>
                <div className="posting-button-div">
                    <Button text="Delete Post" postId={postId} isDisabled={isDisabled} handleButtonClick={handleButtonClick}/>
                    <Button text="Edit Post" postId={postId} isDisabled={isDisabled} handleButtonClick={handleButtonClick}/>
                </div>
            </div>
        </div>
    )
}