import React, { Component } from 'react'
import { connect } from 'react-redux';
import { activeClient } from 'selectors/clients'
import { Container, Image, Header, Card, Icon , Segment, Grid,  Divider } from 'semantic-ui-react'
import './ClientDetails.css'

class ClientDetails extends Component {
  render(){
    const { client } = this.props
    if( !client ) return null

    return(
      <Container style={{paddingTop: '4rem', height:'100%'}}>
        {         
        <Grid>
          <Grid.Row>
            <Grid.Column width='2' >
              <Image src={client.general.avatar} circular />
            </Grid.Column>
            <Grid.Column width='14' verticalAlign='middle'>
              <Header as='h1' style={{marginBottom: '0.2rem'}} color='teal'>
                {client.general.firstName + ' ' + client.general.lastName}
              </Header>
              <Header.Subheader as='h2' style={{marginTop: '0', color:'#777'}}>
                {client.job.title + " - " + client.job.company}
              </Header.Subheader>
            </Grid.Column>

          </Grid.Row>
          <Divider/>
          <Grid.Row >
            <Grid.Column width='2'/>
            <Grid.Column width='14' >

              <Header as='h2' style={{marginTop: '0'}} color='teal'>
                Contacts
              </Header>
              <h4 className='meta'>
                { `phone: ${client.contact.phone}` }
              </h4>
              <h4 className='meta'>
                { `email: ${client.contact.email}` }
              </h4>

              <Header as='h2' color='teal'>
                Address
              </Header>
              <h4 className='meta'>
                { `${client.address.street}, ${client.address.city},` }
              </h4>
              <h4 className='meta'>
                { `${client.address.zipCode}, ${client.address.country}` }
              </h4>
            </Grid.Column>                
          </Grid.Row>
        </Grid>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  client: activeClient(state)
})

export default connect( mapStateToProps , null)(ClientDetails);