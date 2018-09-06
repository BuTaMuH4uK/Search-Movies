import {
  STORE_MOVIES,
  SET_PAGE_ONE,
  PAGE_INCREASE,
  PAGE_DECREASE,
} from '../constants/actionTypes';

const initialState = {
  movies: [],
  page: 1,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_MOVIES: {
      const movies = action.payload.results.map((result) => {
        const {
          id,
          poster_path: posterPath,
          title,
          vote_average: voteAverage,
          release_date: releaseDate,
        } = result;
        return {
          id,
          posterPath,
          title,
          voteAverage,
          releaseDate,
        };
      });
      return { ...state, movies, total_pages: action.payload.total_pages };
    }

    case SET_PAGE_ONE: {
      return { ...state, page: 1 };
    }

    case PAGE_INCREASE: {
      const nextPage = state.page + 1;
      if (nextPage <= state.total_pages) {
        return { ...state, page: nextPage };
      }
      break;
    }

    case PAGE_DECREASE: {
      const nextPage = state.page - 1;
      if (nextPage > 0) {
        return { ...state, page: nextPage };
      }
      break;
    }

    default:
      return state;
  }
  return false;
};

export default moviesReducer;
