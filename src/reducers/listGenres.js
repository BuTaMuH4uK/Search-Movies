import { ON_GENRE_CHANGE, SET_GENRES, CHANGE_URL } from '../constants/actionTypes';

const initialState = {
  genre: 'Action',
  localGenre: 'Action',
  genres: [],
};

const listGenresReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRES: {
      const { genres } = action.payload;
      return { ...state, genres };
    }

    case ON_GENRE_CHANGE:
      return { ...state, localGenre: action.payload.target.value };

    case CHANGE_URL:
      return { ...state, genre: state.localGenre }

    default:
      return state;
  }
};

export default listGenresReducer;
