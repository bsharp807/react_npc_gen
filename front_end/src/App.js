import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux"
import React from "react";

const RequestHelper = require('./helpers/request_helper');
const configFile = require('./config/config');

class App extends Component {
  componentDidMount(){
    this.props.getData()
  }

  render() {
    return (
          <div className="app">
            DISPLAY
          </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  getData(){
    dispatch(() => {
      RequestHelper.get(configFile.url)
      .then(characters => {
        dispatch({
          type: 'GET_CHARACTERS',
          characters
        })
      })
    })
  }
})

export default connect(null,mapDispatchToProps)(App);
