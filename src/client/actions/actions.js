import * as types from '../constants/actionTypes';

export const setCurrentPiece = (obj) => ({
  type: types.SET_CURRENT_PIECE,
  payload: obj,
});

export const addFav = (topic) => ({
  type: types.ADD_FAV,
  payload: topic,
});

export const getFetch = () => ({
  type: types.GET_FETCH,
});

export const postFetch = (obj) => ({
  type: types.POST_FETCH,
  payload: obj,
});

export const deleteFetch = (id) => ({
  type: types.DELETE_FETCH,
  payload: id,
});