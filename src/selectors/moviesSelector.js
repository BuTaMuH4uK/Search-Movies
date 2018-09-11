import { createSelector } from 'reselect';

const movies = state => state.movies;

const moviesSelector = createSelector(
  movies,
  movies => movies
);

export default moviesSelector;
