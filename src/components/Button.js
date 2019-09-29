import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <button disabled={props.disabled} onClick={props.click}>
      {props.content}
    </button>
  );
};

export default Button;
