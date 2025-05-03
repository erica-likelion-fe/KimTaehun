import React from "react";
import '../style/Nav.css';

export default function Nav({ posts, handleNavClick }) {
    const navList = posts.map(post => (
            <li className="list-name" onClick={onNavClick} key={post.name} data-value={post.name}>
                {post.name}
            </li>
        )
    );

    function onNavClick(e){
        e.preventDefault();
        handleNavClick(e.target.dataset.value);
    }

    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="list-name" onClick={onNavClick} data-value="create">Create</li>
                <li className="list-name" onClick={onNavClick} data-value="delete">Delete</li>
                {navList}
            </ul>
        </nav>
    );
}

