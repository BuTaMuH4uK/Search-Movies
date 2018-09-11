import { CHANGE_URL } from '../constants/actionTypes';

const initialState = {
  url: 'https://api.themoviedb.org/3/genre/movie/list?api_key='
    + `${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  moviesUrl: 'https://api.themoviedb.org/3/discover/movie?api_key='
    + `${process.env.REACT_APP_TMDB_API_KEY}`
    + '&language=en-US&sort_by=popularity.desc&with_genres=28'
    + '&primary_release_date.gte=2000-01-01&primary_release_date.lte=2018-12-31'
    + '&vote_average.gte=7&vote_average.lte=10&with_runtime.gte=0&with_runtime.lte=300&page=1'};

const databaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_URL: {
      return { ...state, moviesUrl: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default databaseReducer;
