import React, { Component } from 'react';
import logo from './logo.svg'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadClients } from 'actions/clients'

class App extends Component {

  componentDidMount(){
    this.props.actions.loadClients()
  }
  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loadClients }, dispatch)
})

export default connect(null, mapDispatchToProps)(App);
