import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAUTaHHoAydCeM1sHOu5rpwBpghD6O3bo0",
    authDomain: "learning-management-2850c.firebaseapp.com",
    databaseURL: "https://learning-management-2850c.firebaseio.com",
    projectId: "learning-management-2850c",
    storageBucket: "learning-management-2850c.appspot.com",
    messagingSenderId: "618198019832",
    appId: "1:618198019832:web:01e272441a6b10ed2f150d",
    measurementId: "G-0STHXHT9YP"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider }