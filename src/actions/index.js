export const SET_PAGE = 'SET_PAGE';

export const pages = {
  PREVIOUS_PAGE = 'PREVIOUS_PAGE',
  NEXT_PAGE = 'NEXT_PAGE'
}

export const setPage = page => ({
  type: SET_PAGE,
  page
})