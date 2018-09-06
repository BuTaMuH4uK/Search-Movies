import {
  RECEIVE_GENRES,
  ON_CHANGE_SLIDER,
  ON_GENRE_CHANGE,
} from '../constants/actionTypes';

const initialState = {
  genre: 'Action',
  genres: [],
  year: {
    label: 'year',
    min: 1990,
    max: 2018,
    step: 1,
    value: { min: 2000, max: 2018 },
  },
  rating: {
    label: 'rating',
    min: 0,
    max: 10,
    step: 1,
    value: { min: 7, max: 10 },
  },
  runtime: {
    label: 'runtime',
    min: 0,
    max: 300,
    step: 15,
    value: { min: 0, max: 300 },
  },
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GENRES:
      return { ...state, genres: action.payload };

    case ON_GENRE_CHANGE:
      return { ...state, genre: action.payload.target.value };

    case ON_CHANGE_SLIDER:
      return {
        ...state,
        [action.payload.type]:
          { ...state[action.payload.type], value: action.payload.value },
      };

    default:
      return state;
  }
};

export default navigationReducer;
