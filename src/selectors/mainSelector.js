import { createSelector } from 'reselect';

const database = state => state.database;

const mainSelector = createSelector(
  database,
  database => database
);

export default mainSelector;
