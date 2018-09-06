import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUrl, storeMovies, onPageIncrease, onPageDecrease } from '../actions';
import MovieListItem from '../components/main/movies/MovieListItem';
import Button from '../components/main/navigation/Button';
import './Movies.css';

class Movies extends Component {
  componentDidMount() {
    const { database, storeMovies } = this.props;

    fetch(database.moviesUrl)
      .then(responce => responce.json())
      .then(data => storeMovies(data))
      .catch(error => console.log(error));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.database.moviesUrl !== nextProps.database.moviesUrl) {
      fetch(nextProps.database.moviesUrl)
        .then(responce => responce.json())
        .then(data => nextProps.storeMovies(data))
        .catch(error => console.log(error));
    }
    if (this.props.movies.page !== nextProps.movies.page) {
      this.props.updateUrl(nextProps);
    }
  }

  render() {
    const { movies } = this.props;

    return (
      <section className="movies">
        <ul className="items">
          {movies.movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
        </ul>
        <div className="pagination">
      <Button onClick={this.props.onPageDecrease}>Previous</Button>
      <span>{`Page ${movies.page}`}</span>
      <Button onClick={this.props.onPageIncrease}>Next</Button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = store => ({
  navigation: store.navigation,
  database: store.database,
  movies: store.movies,
});

const mapDispatchToProps = dispatch => ({
  storeMovies: movies => dispatch(storeMovies(movies)),
  onPageIncrease: () => dispatch(onPageIncrease()),
  onPageDecrease: () => dispatch(onPageDecrease()),
  updateUrl: (state) => {
    const { genres, year, rating, runtime } = state.navigation;
    const selectedGenre = genres.find(genre => genre.name === state.navigation.genre);
    const genreId = selectedGenre.id;

    const moviesUrl = `https://api.themoviedb.org/3/discover/movie?`
    + `api_key=${process.env.REACT_APP_TMDB_API_KEY}&`
    + `language=en-US&sort_by=popularity.desc&`
    + `with_genres=${genreId}&`
    + `primary_release_date.gte=${year.value.min}-01-01&`
    + `primary_release_date.lte=${year.value.max}-12-31&`
    + `vote_average.gte=${rating.value.min}&`
    + `vote_average.lte=${rating.value.max}&`
    + `with_runtime.gte=${runtime.value.min}&`
    + `with_runtime.lte=${runtime.value.max}&`
    + `page=${state.movies.page}`;

    dispatch(updateUrl(moviesUrl));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
