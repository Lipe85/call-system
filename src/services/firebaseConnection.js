import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAVUBaI7wZasO9wm2hjKPOS9C9W2lrwpfY",
    authDomain: "call-system-f2cf7.firebaseapp.com",
    projectId: "call-system-f2cf7",
    storageBucket: "call-system-f2cf7.appspot.com",
    messagingSenderId: "48344106991",
    appId: "1:48344106991:web:adf0cc7b3283363a1a981a",
    measurementId: "G-6Q2NLRBGV9"

  };
  
  
   if(firebase.app.length){
    firebase.initializeApp(firebaseConfig);
   }
  
   export default firebase;
  
