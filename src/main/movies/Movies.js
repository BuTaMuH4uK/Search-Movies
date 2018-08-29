import React from "react";
import MovieListItem from "./MovieListItem";
import "./Movies.css";
import Button from "../navigation/Button";

const Movies = ({ movies, page, onPageIncrease, onPageDecrease }) => (
  <section className="movies">
    <ul className="items">
      {movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
    </ul>
    <div className="pagination">
      <Button onClick={onPageDecrease}>Previous</Button>
      <span>{`Page ${page}`}</span>
      <Button onClick={onPageIncrease}>Next</Button>
    </div>
  </section>
);

export default Movies;
