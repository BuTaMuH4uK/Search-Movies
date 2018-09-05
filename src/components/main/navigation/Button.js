import React from "react";
import "./Button.css";

const Button = ({ children }) => (
  <div className="search-button">
    <button>{children}</button>
  </div>
);

export default Button;
