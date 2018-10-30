import _ from 'lodash'

function isClientsInfoIncludesFilter(client, filterString){
  const regExp = new RegExp(_.escapeRegExp(filterString), 'i' )

  return [
    client.general.firstName, client.general.lastName,
    client.job.title, client.job.company, 
    client.contact.phone, client.contact.email, 
    client.address.city, client.address.country, client.address.zipCode
  ]
  .some( clientInfo => regExp.test(clientInfo) )
}

export default isClientsInfoIncludesFilter