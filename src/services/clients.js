import * as clientsEndpoints from 'constants/endpoints/clients'
import callApi from 'helpers/callApi'

class ClientsService {
  loadClients(){
    return callApi({
      url: clientsEndpoints.loadClients
    })
  }
}

export default new ClientsService()