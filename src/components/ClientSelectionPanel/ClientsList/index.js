import React, { Component } from 'react'
import { Grid, Card, List, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import clientProp from 'constants/propTypes/client'
import './ClientsList.css'

const ClientsList = ({clients, onItemClick}) => (
  <Grid.Row style={{height: '90%'}}> 
    <List className='clients-list' divided selection>
      {
        clients && clients.map( (client, index) => (
          <List.Item onClick={ () => onItemClick(client) } key={index}>
            <Image avatar src={client.general.avatar} size='mini'/>
            <List.Content>
              <List.Header>
                {client.general.firstName + " " + client.general.lastName}
              </List.Header>
              <List.Description> {client.job.title} </List.Description>
            </List.Content>
          </List.Item>
        ))
      }                
    </List>         
  </Grid.Row>
)

ClientsList.propTypes = {
  clients: PropTypes.arrayOf(clientProp).isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default ClientsList
