const initialState = {
  movies: [],
  page: 1,
}

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_MOVIES': {
      const movies = action.payload.results.map(result => {
        const {
          vote_count,
          id,
          genre_ids,
          poster_path,
          title,
          vote_average,
          release_date
        } = result;
        return {
          vote_count,
          id,
          genre_ids,
          poster_path,
          title,
          vote_average,
          release_date
        };
      });

      return { ...state, movies, total_pages: action.payload.total_pages };
    }
  }
  return state;
}