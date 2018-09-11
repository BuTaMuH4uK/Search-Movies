import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUrl, onPageIncrease, onPageDecrease } from '../actions';
import moviesSelector from '../selectors/moviesSelector';
import MovieListItem from '../components/main/movies/MovieListItem';
import Button from '../components/main/navigation/Button';
import './Movies.css';

class Movies extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.movies.page !== nextProps.movies.page) {
      this.props.createUrl();
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

const mapStateToProps = state => ({ movies: moviesSelector(state) });

const mapDispatchToProps = dispatch => ({
  onPageIncrease: () => dispatch(onPageIncrease()),
  onPageDecrease: () => dispatch(onPageDecrease()),
  createUrl: () => dispatch(createUrl()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
