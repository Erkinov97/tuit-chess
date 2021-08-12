import * as firebase from 'firebase/app'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyAQqiYsud0ybYsFTGTSQ6aIASVBxbdguLM",
    authDomain: "nuxt-auth-26f99.firebaseapp.com",
    projectId: "nuxt-auth-26f99",
    storageBucket: "nuxt-auth-26f99.appspot.com",
    messagingSenderId: "813279391073",
    appId: "1:813279391073:web:27b564b0077c2c66c9e920",
    measurementId: "G-WGHVZW4KL2"
  };

  let app = nil;

  if(!firebase.apps.length){

    app = firebase.initializeApp(firebaseConfig)

  }

  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase;