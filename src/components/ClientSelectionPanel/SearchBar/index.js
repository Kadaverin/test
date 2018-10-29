import React, { Component } from 'react'
import { Grid, Input } from 'semantic-ui-react'

class SearchBar extends Component {
  render(){
    return(
      <Grid.Row style={{height: '10%' ,paddingTop:'1rem'}} >
        <Input 
          fluid
          icon='search' 
          iconPosition='left'
          placeholder='Search client'               
        />
      </Grid.Row>
    )
  }
}

export default SearchBar