import React from 'react';
import './Button.css';

const Button = (props) => (
  <button
    onClick={props.onClick} type={props.type}
    className={['btn', props.btnType].join(' ')}
  >
    {props.children}
  </button>
);

export default Button;