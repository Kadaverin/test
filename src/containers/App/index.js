import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadClients } from 'actions/clients'
import ClientDetails from 'containers/ClientDetails'
import ClientSelectionPanel from 'containers/ClientSelectionPanel'
import { Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './App.css'


class App extends Component {

  componentDidMount(){
    this.props.actions.loadClients()
  }
  
  render() {
    return (
      <div className="App">
        <Grid style={{height: '100vh' , padding: '1rem'}}>
          <Grid.Column width='4' style={{height: '100vh'}}>
            <ClientSelectionPanel/>
          </Grid.Column>
          <Grid.Column width='12' style={{height: '100vh'}} >
            <ClientDetails/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loadClients }, dispatch)
})

App.propTypes = {
  actions: PropTypes.shape({
    loadClients: PropTypes.func.isRequired
  })
}

export default connect(null, mapDispatchToProps)(App);
