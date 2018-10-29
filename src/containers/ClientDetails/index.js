import React, { Component } from 'react'
import { connect } from 'react-redux';
import { activeClient } from 'selectors/clients'
import { Container, Image, Header, Card, Icon } from 'semantic-ui-react'

class ClientDetails extends Component {
  render(){
    const { client } = this.props
    if( !client ) return null
    return(
      <Container style={{paddingTop: '4rem', height:'100%'}}>
        {
          <React.Fragment>
            <Image src={client.general.avatar} avatar size='small' circular inline/>
            <Header as='h2'>
              {client.general.firstName + ' ' + client.general.lastName}
            </Header>
          </React.Fragment>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  client: activeClient(state)
})

export default connect( mapStateToProps , null)(ClientDetails);