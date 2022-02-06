import React from 'react';
import './Button.scss';

const Button = ({ textBtn, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {textBtn}
    </button>
  );
};

export default Button;
