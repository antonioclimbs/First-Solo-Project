import * as types from '../constants/actionTypes';

const initialState = {
  totalPoints: 0,
  upgrades: [],
  multiplier: 1,
  additionalPoints: 0
};

const buttonReducer = (state = initialState, action) => {
  let newTotalPoints;

  switch (action.type) {
    case types.ADD_POINT: {
      newTotalPoints = state.totalPoints + 1;
      return {
        ...state,
        totalPoints: newTotalPoints
      }
    }
    default: {
      return state;
    }
  }
}

export default buttonReducer;