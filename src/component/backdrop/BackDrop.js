import  React from 'react';
import './BackDrop.css';

const BackDrop = props => (

    <div className="backdrop" onClick={props.backDropClickHandler}></div>

);



export default BackDrop;