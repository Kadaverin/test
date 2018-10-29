import { combineReducers } from 'redux'
import * as actionsTypes from 'constants/actionsTypes/clients'

const initialState = {
  allClients: [],
  activeClient: null,
  filter: null
}

function filter(state = initialState.filter, action){
  switch(action.type){
    case actionsTypes.CHANGE_CLIENTS_FILTER:
      return action.payload.clientsFilter
    default: return state
  }
}

function allClients(state = initialState.allClients, action){
  switch(action.type){
    case actionsTypes.LOAD_CLIENTS_SUCCESS: 
      return action.payload
    default: return state
  }
}

function activeClient(state = initialState.activeClient, action){
  switch(action.type){
    case actionsTypes.SET_ACTIVE_CLIENT:
      return action.payload
    default: return state
  }
}

export default combineReducers({
  allClients,
  filter,
  activeClient
})