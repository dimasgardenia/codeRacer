import React, { Component } from 'react';
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
      if (user) this.props.history.push('/board')
    })
  }

  componentWillMount() {
    this.stateChangeListener()
  }

  render() {
    return (
      <div>
        <button onClick={this.facebookLogin}>Login pakai Facebook</button>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

export default Login