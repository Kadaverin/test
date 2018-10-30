import React from 'react'
import { connect } from 'react-redux';
import { activeClient } from 'selectors/clients'
import ClientDetailsUI from 'components/ClientDetailsUI'
import clientProp from 'constants/propTypes/client'

const ClientDetails = ({client}) => {
  return client 
         ? <ClientDetailsUI client={client} /> 
         : null
}   

const mapStateToProps = (state) => ({
  client: activeClient(state)
})

ClientDetails.propTypes = {
  client: clientProp
}

export default connect( mapStateToProps , null)(ClientDetails);