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
    return (
      <div className="App">
      <div>
      
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Find the nearest blood bank!
            </Typography>
          </Toolbar>
        </AppBar>
       </div>
        <div className="inputContainer">
          <div className="textContainer">
              <TextField
                id="city"
                label="City"
                placeholder="type in City! eg. Delhi"
                value={this.state.city}
                margin="normal"
                onChange={this.handleChange('city')}
              />
              <Link to={`/DataTable`}>
                <Button color="primary" > 
                  Search 
                </Button>
              </Link>
              
              
          {/* </div>
          <span className="divider" >or</span>
          <div>
            <Button variant="contained" color="primary" > 
                    Search with current location
            </Button> */}
            
          </div>
        </div>
        <Route
          path="/DataTable"
          render={props => (
            <DataTable {...props} city={this.state.city}/>
          )}
        />
      </div>
    );
  }
}

export default App;
