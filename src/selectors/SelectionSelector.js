import { createSelector } from 'reselect';
import _ from 'lodash';

const listGenres = state => state.listGenres;

const changeGenre = createSelector(
  listGenres,
  (listGenres) => listGenres.
)

export default selectionSelector;
