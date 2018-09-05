import { combineReducers } from "redux";
import { moviesReducer } from './movies';
import { navigationReducer } from './navigation';
import { databaseReducer } from './database';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  navigation: navigationReducer,
  database: databaseReducer
});