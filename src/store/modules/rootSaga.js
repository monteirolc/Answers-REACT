import { all } from 'redux-saga/effects';

import questions from './questions/sagas';

export default function* rootSaga() {
  return yield all([questions]);
}
