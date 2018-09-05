import React, { Component } from "react";
import { connect } from 'react-redux';
import { storeMovies } from '../actions/moviesActions';
import MovieListItem from "../components/main/movies/MovieListItem";
import Button from "../components/main/navigation/Button";
import "./Movies.css";

class Movies extends Component {
  componentDidMount() {
    const { database, storeMovies } = this.props;

    fetch(database.moviesUrl)
      .then(responce => responce.json())
      .then(data => storeMovies(data))
      .catch(error => console.log(error));
  }

  render() {
    const { movies, page } = this.props;

    return (
      <section className="movies">
        <ul className="items">
          {movies.movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
        </ul>
        <div className="pagination">
          <Button>Previous</Button>
          <span>{`Page ${page}`}</span>
          <Button>Next</Button>
        </div>
      </section>
    );
  }
};

const mapStateToProps = store => ({
  database: store.database,
  movies: store.movies
});

const mapDispatchToProps = dispatch => ({
  storeMovies: movies => dispatch(storeMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);