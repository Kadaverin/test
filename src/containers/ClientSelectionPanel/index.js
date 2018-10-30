import React, { Component } from 'react'
import SearchBar from 'components/ClientSelectionPanel/SearchBar'
import ClientsList from 'components/ClientSelectionPanel/ClientsList'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveClient, changeClientsFilter } from 'actions/clients';
import { visibleClients } from 'selectors/clients'

class ClientSelectionPanel extends Component {
  render(){
    return(
      <React.Fragment>
        <SearchBar 
          onSearchInput={this.props.actions.changeClientsFilter}
        />
        <ClientsList 
          clients={this.props.clients}
          onItemClick={this.props.actions.setActiveClient}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  clients: visibleClients(state)
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
     setActiveClient,
     changeClientsFilter
  }, dispatch)
})

export default connect( mapStateToProps , mapDispatchToProps)(ClientSelectionPanel);