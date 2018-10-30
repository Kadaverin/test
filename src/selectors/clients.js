import { createSelector } from 'reselect'
import isClientsInfoIncludesFilter from 'helpers/isClientsInfoIncludesFilter'

const getAllClients = (state) => state.clients.allClients
const getClientsFilter = (state) => state.clients.filter
const getActiveCLient = (state) => state.clients.activeClient

export const visibleClients = createSelector (
  getAllClients,
  getClientsFilter,
  (clients, filterString) => {
    return filterString 
          ? clients.filter(client => isClientsInfoIncludesFilter(client, filterString)) 
          : clients
  }  
)

export const activeClient = createSelector(
  getActiveCLient,
  (client) => client
)