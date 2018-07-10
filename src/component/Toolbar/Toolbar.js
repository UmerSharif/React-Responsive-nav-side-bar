import React from 'react';
import  './Toolbar.css';
import DrawerToddleButton from '../sidedrawer/DrawerToggleButton';

const toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <DrawerToddleButton click= {props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/">The Logo</a></div>
            <div className="spacer" />
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