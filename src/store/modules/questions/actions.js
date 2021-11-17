import * as types from '../types';

export function questionsRequest() {
  return {
    type: types.QUESTIONS_REQUEST,
  };
}

export function questionsSuccess() {
  return {
    type: types.QUESTIONS_SUCCESS,
  };
}
export function questionsFailure() {
  return {
    type: types.QUESTIONS_FAILURE,
  };
}
