import React, { Component } from 'react'

import firebase from '../firebase'

class BoardClass extends Component {
  constructor() {
    super()
    this.state = ({
      name: '',
      photoURL: '',
      syntax: []
    })

  }

  stateChangeListener() {
    firebase.auth().onAuthStateChanged(user => {
      if('board', user) {
        console.log(user)
        this.setState({
          name: user.displayName,
          photoURL: user.photoURL
        })
      } else {
        this.props.history.push('/')
      }
    })
  }

  nextQuestion() {
    var test = `for (i = 0; i < cars.length; i) { 
    text += cars[i] + "<br>";
    }`
    return <div>
      <p>{test}</p>
    </div>
  }

  board() {
    return <div className="panel panel-success">
      <div className="panel panel-heading">
        <h1 className="panel-title">Your Challenge</h1>
      </div>
      <div className="panel-body">
        {this.nextQuestion.call(this)}
      </div>
      <label htmlFor=""></label>
      <textarea
        onKeyUp={this.handleKeyUp.bind(this)}
       name="" 
       id="" 
       cols="30" 
       rows="10" 
       placeholder="type your code here"></textarea>
    </div>
  }

  logout() {
    console.log('Logout Facebook')
    firebase.auth().signOut()
    .then(() => {
      console.log('Logged Out')
    })
  }

  componentWillMount() {
    this.stateChangeListener()
  }

  handleKeyUp () {
  }

  render() {
    return (
      <div>
        <button onClick={this.logout}>Logout</button>
        <div>
          <h1>Welcome {this.state.name} !</h1><hr />
        </div>
        <div>
          <img src={this.state.photoURL}/>
        </div>
        <div>
          {this.board.call(this)}
        </div>
      </div>
    )
  }
}

export default BoardClass
