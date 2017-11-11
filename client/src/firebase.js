import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCDNB01pAhQepEWDS_9aJFj-hds1BXfmTo",
  authDomain: "coderacer-e89c2.firebaseapp.com",
  databaseURL: "https://coderacer-e89c2.firebaseio.com",
  projectId: "coderacer-e89c2",
  storageBucket: "coderacer-e89c2.appspot.com",
  messagingSenderId: "137354009266"
}

firebase.initializeApp(config)
export default firebase