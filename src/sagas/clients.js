import { takeLatest ,all ,call ,put } from 'redux-saga/effects';
import * as actionsTypes from 'constants/actionsTypes/clients'
import * as actions from 'actions/clients'
import ClientsService from 'services/clients'


function * loadClients(action){
  try {
    const clients = yield call(ClientsService.loadClients)
    console.log(clients)
    yield put(actions.loadClientsSuccess(clients))
  } catch (e) {
    console.log(e)
    yield put(actions.loadClientsError(e))
  }
}

export default function* recipesSaga(){
  yield all([
    takeLatest(actionsTypes.LOAD_CLIENTS_REQUEST, loadClients)
  ])
}