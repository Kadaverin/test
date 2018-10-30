import React, { Component } from 'react'
import { Grid, Input } from 'semantic-ui-react'
import _ from 'lodash'

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchInput: ''
    }
  }

  handleSearch = _.debounce(input => {
    this.props.onSearchInput(input.value)
  }, 100 )

  render(){
    return(
      <Grid.Row style={{height: '10%' ,paddingTop:'1rem'}} >
        <Input 
          fluid
          icon='search' 
          iconPosition='left'
          placeholder='Search client'   
          onChange={ ({target}) => this.handleSearch(target) }            
        />
      </Grid.Row>
    )
  }
}

export default SearchBar