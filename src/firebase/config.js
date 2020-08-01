import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBdVuySHTlu2salO1R7lxJu9UB2_6_BTH4",
    authDomain: "photo-gallery-9db1e.firebaseapp.com",
    databaseURL: "https://photo-gallery-9db1e.firebaseio.com",
    projectId: "photo-gallery-9db1e",
    storageBucket: "photo-gallery-9db1e.appspot.com",
    messagingSenderId: "240725235046",
    appId: "1:240725235046:web:d0f4b2ddaae53aaffda4a7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFireStore, timestamp };