import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: process.env.REACT_APP_API_APIKEY,
        images: []
    }

  render() {
    return (
      <div>
        <TextField 
         name="searchText"
         value={this.state.searchText}
         onChange={this.onTextChange}
         floatingLabelText="Search For Images"
         fullWidth={true}
        />
      </div>
    )
  }
}

export default Search;