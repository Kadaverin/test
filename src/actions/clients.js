import * as types from 'constants/actionsTypes/clients'

export const loadClients = () => ({
  type: types.LOAD_CLIENTS_REQUEST
})

export const loadClientsSuccess = (clients) => ({
  type: types.LOAD_CLIENTS_SUCCESS,
  payload: clients
})

export const loadClientsError = (error) => ({
  type: types.LOAD_CLIENTS_ERROR,
  payload: error.message
})


export const setActiveClient = (client) => ({
  type: types.SET_ACTIVE_CLIENT,
  payload: client
})


export const changeClientsFilter = (value) => ({
  type: types.CHANGE_CLIENTS_FILTER,
  payload: value || null
})

