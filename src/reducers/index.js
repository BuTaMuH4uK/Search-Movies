import { combineReducers } from 'redux';
import moviesReducer from './movies';
import navigationReducer from './navigation';
import databaseReducer from './database';

const rootReducer = combineReducers({
  movies: moviesReducer,
  navigation: navigationReducer,
  database: databaseReducer,
});

export default rootReducer;
