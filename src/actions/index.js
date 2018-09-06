import * as types from '../constants/actionTypes';

export const receiveGenres = genres => ({
  type: types.RECEIVE_GENRES,
  payload: genres,
});

export const updateUrl = url => ({
  type: types.CHANGE_URL,
  payload: url,
});

export const storeMovies = movies => ({
  type: types.STORE_MOVIES,
  payload: movies,
});

export const onPageIncrease = () => ({
  type: types.PAGE_INCREASE,
});

export const onPageDecrease = () => ({
  type: types.PAGE_DECREASE,
});

export const onGenreChange = event => ({
  type: types.ON_GENRE_CHANGE,
  payload: event,
});

export const onChangeSlider = data => ({
  type: types.ON_CHANGE_SLIDER,
  payload: data,
});

export const setPageOne = () => ({
  type: types.SET_PAGE_ONE,
});
