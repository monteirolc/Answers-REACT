import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

import axios from '../../../services/axios';

function* questionsRequest() {
  try {
    const result = yield call(axios.get);
    console.log(result);
    yield put(actions.questionsSuccess());
  } catch (e) {
    toast.error('Deu Erro');
    yield put(actions.questionsFailure());
  }
}

export default all([takeLatest(types.QUESTIONS_REQUEST, questionsRequest)]);
