import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBcpDhUC5P39dMIw0Anny4i6H9d35aNRfI",
    authDomain: "diary-a2b82.firebaseapp.com",
    databaseURL: "https://diary-a2b82.firebaseio.com",
    projectId: "diary-a2b82",
    storageBucket: "diary-a2b82.appspot.com",
    messagingSenderId: "200470725430"
  };
firebase.initializeApp(config);
  
export const database = firebase.database().ref('/notes')
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()
