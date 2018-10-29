import React, { Component } from 'react'
import { Grid, Card, List, Image } from 'semantic-ui-react'
import './ClientsList.css'


class ClientsList extends Component {

  render(){
    console.log('LIST')
    console.log(this.props)
    return(
      <Grid.Row style={{height: '90%'}}> 
        <List link className='clients-list'>
          {
            this.props.clients.map( (client, index) => (
              <List.Item onClick={ () => this.props.onItemClick(client) }>
                <Card link fluid> 
                  <Card.Content>
                    <Image floated='left' size='mini' src={client.general.avatar} />
                    <Card.Header textAlign="left">
                      {client.general.firstName + " " + client.general.lastName}
                    </Card.Header>
                    <Card.Meta textAlign="left">
                      {client.job.title}
                    </Card.Meta>
                  </Card.Content>
                </Card>
              </List.Item>
            ))
          }
                
        </List>         
      </Grid.Row>
    )
  }
}

export default ClientsList