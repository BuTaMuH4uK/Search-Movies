import { combineReducers } from 'redux';
import moviesReducer from './movies';
import navigationReducer from './navigation';
import databaseReducer from './database';
import listGenresReducer from './listGenres';

const rootReducer = combineReducers({
  movies: moviesReducer,
  navigation: navigationReducer,
  database: databaseReducer,
  listGenres: listGenresReducer,
});

export default rootReducer;
