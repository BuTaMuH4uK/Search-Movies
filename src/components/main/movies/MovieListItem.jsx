import React from 'react';
import './MovieListItem.css';
import { Link } from 'react-router-dom';

const MovieListItem = ({ movie }) => {
  const { id, title, posterPath, releaseDate, voteAverage } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/w342/${posterPath}`;
  const year = releaseDate.substring(0, 4);

  return (
    <li className="movie-item">
      <Link to={process.env.PUBLIC_URL + `/movie/${id}`} className="thumbnail">
        <img src={imgUrl} alt={title} />
        <div className="movie-description">
          <h2>{title}</h2>
          <section className="movie-details">
            <div className="movie-year">
              <span className="title">Year</span>
              <span>{year}</span>
            </div>
            <div className="movie-rating">
              <span className="title">Rating</span>
              <span>{voteAverage}</span>
            </div>
          </section>
        </div>
      </Link>
    </li>
  );
};

export default MovieListItem;
