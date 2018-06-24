import React, { Component } from 'react';
import './App.css';

//material-ui
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

//react router
import { Route, Link } from 'react-router-dom';

import DataTable from './DataTable';
import InputSearch from './InputSearch';

class App extends Component {
  state = {
    city: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    return(
      <div>
        <Route 
            exact path="/"
            render={props => (
              <InputSearch {...props} city={this.state.city} handleChange={this.handleChange}/>
            )}
          />
        <Route
            path="/DataTable"
            render={props => (
              <DataTable {...props} city={this.state.city} handleChange={this.handleChange}/>
            )}
          />
      </div> 
    )
  }
}

export default App;
