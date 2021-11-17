import * as types from '../types';

const initialState = {
  dataBase: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.QUESTIONS_SUCCESS: {
      const newState = { ...state };
      newState.dataBase = !newState.dataBase;
      return newState;
    }
    case types.QUESTIONS_FAILURE: {
      return state;
    }
    case types.QUESTIONS_REQUEST: {
      return state;
    }
    default: {
      return state;
    }
  }
}
