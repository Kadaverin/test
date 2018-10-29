import { combineReducers } from 'redux'
import * as actionsTypes from 'constants/actionsTypes/clients'

const initialState = {
  clients: [],
  filter: null
}

function filter(state = initialState.filter, action){
  switch(action.type){
    case actionsTypes.CHANGE_CLIENTS_FILTER:
      return action.payload.clientsFilter
    default: return state
  }
}

function clients(state = initialState.clients, action){
  switch(action.type){
    case actionsTypes.LOAD_CLIENTS_SUCCESS: 
      return action.payload
    default: return state
  }
}

export default combineReducers({
  clients,
  filter
})