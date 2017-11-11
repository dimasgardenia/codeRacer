import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import firebase from './firebase'

import Board from './components/board'
import Login from './components/login'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Route exact path='/' component={Login} />
          <Route exact path='/board' component={Board} />
        </div>
      </Router>
    );
  }
}

export default App
