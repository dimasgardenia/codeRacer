import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import firebase from '../firebase'

class Login extends Component {

  facebookLogin() {
    console.log('Login Facebook')
    var provider = new firebase.auth.FacebookAuthProvider()
    provider.addScope('public_profile')
    provider.addScope('email')
    firebase.auth().signInWithPopup(provider).then(result => {
      console.log(result)
    })
      .catch(e => {
        console.log('Gagal login Facebook')
        console.log(e)
      })
  }

  logout() {
    console.log('Logout Facebook')
    firebase.auth().signOut().then(() => {
      console.log('Logged Out')
    })
      .catch(e => {
        console.log(e)
      })
  }

  stateChangeListener() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
    })
  }

  render() {
    return (
      <button onClick={this.facebookLogin}>Login pakai Facebook</button>
    )
  }
}

export default Login