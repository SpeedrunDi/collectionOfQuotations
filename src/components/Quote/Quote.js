import React from 'react';
import './Quote.css';

const Quote = (props) => (
  <div className="quote">
    <div className="textBlock">
      <p className="text">"{props.text}"</p>
      <p>- {props.author}</p>
    </div>
    <div className="buttonsBlock">
      <span>Edit</span>
      <span>Delete</span>
    </div>
  </div>
)

export default Quote;