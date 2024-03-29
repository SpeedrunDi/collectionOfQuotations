import React from 'react';
import './Quote.css';
import Button from "../UI/Button/Button";

const Quote = (props) => (
  <div className="quote">
    <div className="textBlock">
      <p className="text">"{props.text}"</p>
      <p className="author">&mdash; {props.author}</p>
    </div>
    <div className="buttonsBlock">
      <Button onClick={props.onEdit} type="submit">Edit</Button>
      <Button onClick={props.onDelete} type="submit" btnType="danger">Delete</Button>
    </div>
  </div>
)

export default Quote;