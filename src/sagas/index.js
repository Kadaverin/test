import { all, fork } from 'redux-saga/effects'
import clientsSaga from './clients'

export default function* rootSaga() {
  yield all([
    fork(clientsSaga)
  ])
}