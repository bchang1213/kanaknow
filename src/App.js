import React, { Component } from 'react';
import './App.css';
import Board from './components/Board/Board.js';
import { connect } from 'react-redux'
import * as Actions from './actions'

let injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();
class App extends Component {

  render() {
    return (
      <div className="App">
        <Board reduxProps={this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  toPlay: state.audioReducer
})

export default connect(mapStateToProps, Actions)(App)
