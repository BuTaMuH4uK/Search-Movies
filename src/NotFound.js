import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => (
  <div className="notfound">
    <h3>We couldn't find what you were looking for :(</h3>
    <Link to={process.env.PUBLIC_URL + '/'}>Here you can browse the movies</Link>
  </div>
);

export default NotFound;
