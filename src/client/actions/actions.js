import * as types from '../constants/actionTypes';

export const setCurrentPiece = (obj) => ({
  type: types.SET_CURRENT_PIECE,
  payload: obj,
});

export const getFetch = (obj) => ({
  type: types.GET_FETCH,
  payload: obj,
});

export const reset = () => ({
  type: types.RESET,
});