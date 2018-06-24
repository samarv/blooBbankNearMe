import React, { Component } from 'react';
import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//firebase
import firebase from 'firebase/app';
import 'firebase/database';


var config = {
    apiKey: "AIzaSyBe9kavmQkn8IPtKEazGtSES79RAiDJ0zc",
    authDomain: "nametag-4b040.firebaseapp.com",
    databaseURL: "https://nametag-4b040.firebaseio.com",
    projectId: "nametag-4b040",
    storageBucket: "nametag-4b040.appspot.com",
    messagingSenderId: "895386333152"
  };

firebase.initializeApp(config);

var database = firebase.database();


export default class DataTable extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
           snapshot: [],
           fetching: true
        }
    }

    fetch(){
        var that = this;
        database.ref('/records/').orderByChild("__city").equalTo(`${this.props.city}`).once('value').then(function(snapshot) {
            that.setState({
                snapshot: Object.entries(snapshot.val()),
            })
          });
    }

    componentDidMount(){
        this.fetch()
        console.log(this.state.snapshot)
    }
  render() {
    return (
      <div>
         <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Blood Bank Name</TableCell>
            <TableCell numeric>Address</TableCell>
            <TableCell numeric>Category</TableCell>
            <TableCell numeric>Map link</TableCell>
            <TableCell numeric>State</TableCell>
            <TableCell numeric>City</TableCell>
            <TableCell numeric>Nodal Officer</TableCell>
            <TableCell numeric>Contact No</TableCell>
            <TableCell numeric>Mobile</TableCell>
            <TableCell numeric>Apheresis</TableCell>

          </TableRow>
        </TableHead>
            <TableBody>
                {/* {
                    database.ref('/records/')
                        .orderByChild("__city")
                        .equalTo("Delhi").once('value')
                        .then(function(snapshot) {
                            var username = (snapshot.val()) || 'Anonymous';
                            console.log("un", username)
                            console.log("snapshot", snapshot.val())
                    
                        })
                        .catch(err => {
                            console.log(err)
                        })
                } */}
                {this.state.snapshot.map(n => {
                    let bbi = n["1"]
                    {console.log(bbi)}
                    return (
                        <TableRow key={n["0"]}>
                            <TableCell component="th" scope="row">
                            {bbi._blood_bank_name}
                            </TableCell>
                            <TableCell numeric>{bbi.__address}</TableCell>
                            <TableCell numeric>{bbi.__category}</TableCell>
                            <TableCell numeric>
                                <a href={`https://www.google.com/maps/search/?api=1&query=${bbi.__latitude},${bbi.__longitude}`}>map</a>
                            </TableCell>
                            <TableCell numeric>{bbi.__state}</TableCell>
                            <TableCell numeric>{bbi.__city}</TableCell>
                            <TableCell numeric>{bbi.__nodal_officer_}</TableCell>
                            <TableCell numeric>{bbi.__contact_no}</TableCell>
                            <TableCell numeric>{bbi._mobile}</TableCell>
                            <TableCell numeric>{bbi.__apheresis}</TableCell>
                            
                        </TableRow>
                    );
                })}
            </TableBody>
      </Table>
    </Paper>
      </div>
    )
  }
};
