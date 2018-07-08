import React from 'react';
import  './Toolbar.css';

const toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div></div>
            <div className="toolbar__logo"><a href="/">The Logo</a></div>
            <div className="toolbar__navigation__items">
                <ul>
                    <li><a href="/">Product</a></li>
                    <li><a href="/">users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;