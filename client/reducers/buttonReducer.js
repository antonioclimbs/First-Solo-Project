import * as types from '../constants/actionTypes';

const initialState = {
  totalPoints: 0,
  upgrades: [],
  multiplier: 1,
  additionalPoints: 0
};

const marketsReducer = (state = initialState, action) => {
  let marketList;
  let totalCards;

  switch (action.type) {
    case types.ADD_POINT: {

    }
  }
}

export default marketsReducer;