import React from 'react';
// import './App.css';

const Button = props => (
  <div onClick = {
    ()=> props.whenClicked(props.id)
  }

  className="clicker">
  {/* This creates a button as an image element  */}
    <img src={props.image} alt = {props.image} />
  </div>
)
export default Button;