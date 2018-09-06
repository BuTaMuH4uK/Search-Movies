import { CHANGE_URL } from '../constants/actionTypes';

const initialState = {
  url: 'https://api.themoviedb.org/3/genre/movie/list?api_key='
    + `${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  moviesUrl: 'https://api.themoviedb.org/3/discover/movie?api_key='
    + `${process.env.REACT_APP_TMDB_API_KEY}`
    + '& language=en - US & sort_by=popularity.desc & include_adult=false & include_video=false & page=1',
};

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
