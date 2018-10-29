import { createSelector } from 'reselect'

const getAllClients = (state) => state.clients.allClients
const getClientsFilter = (state) => state.clients.filter
const getActiveCLient = (state) => state.clients.activeClient

export const visibleClients = createSelector (
  getAllClients,
  getClientsFilter,
  (clients, filter) => {
    // TODO: filter clients by regexp on all object fields
    return filter ? clients.filter((client) => client) : clients
  }  
)

export const activeClient = createSelector(
  getActiveCLient,
  (client) => client
)