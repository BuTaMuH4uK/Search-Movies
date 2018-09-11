import * as types from '../constants/actionTypes';

const setGenres = genres => ({
  type: types.SET_GENRES,
  payload: genres,
});

export const fetchAndSetGenres = url => dispatch => {
  return fetch(url)
    .then(responce => responce.json())
    .then(data => dispatch(setGenres(data)))
    .catch(error => console.log(error));
}

const updateUrl = url => ({
  type: types.CHANGE_URL,
  payload: url,
});

export const createUrl = () => (dispatch, getState) => {
  const { year, rating, runtime } = getState().navigation;
  const selectedGenre = getState().navigation.genres.find(genre => genre.name === getState().navigation.genre);
  const genreId = selectedGenre.id;

  const moviesUrl =
    `https://api.themoviedb.org/3/discover/movie?` +
    `api_key=${process.env.REACT_APP_TMDB_API_KEY}&` +
    `language=en-US&sort_by=popularity.desc&` +
    `with_genres=${genreId}&` +
    `primary_release_date.gte=${year.value.min}-01-01&` +
    `primary_release_date.lte=${year.value.max}-12-31&` +
    `vote_average.gte=${rating.value.min}&` +
    `vote_average.lte=${rating.value.max}&` +
    `with_runtime.gte=${runtime.value.min}&` +
    `with_runtime.lte=${runtime.value.max}&` +
    `page=${getState().movies.page}`;

  return dispatch(updateUrl(moviesUrl));
}

const storeMovies = movies => ({
  type: types.STORE_MOVIES,
  payload: movies,
});

export const fetchAndStore = url => dispatch => {
  return fetch(url)
    .then(responce => responce.json())
    .then(data => dispatch(storeMovies(data)))
    .catch(error => console.log(error));
}

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
