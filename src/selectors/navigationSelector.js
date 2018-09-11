import { createSelector } from 'reselect';

const databaseSelector = state => state.database;
const navigationSelector = state => state.navigation;
const moviesSelector = state => state.movies;

const navigationSelectors = createSelector(
  databaseSelector,
  navigationSelector,
  moviesSelector,
  () => ({})
)

export default navigationSelectors;
