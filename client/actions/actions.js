import * as types from '../constants/actionTypes';

export const addPoint = marketId => ({
  type: types.ADD_POINT,
  payload: marketId,
});