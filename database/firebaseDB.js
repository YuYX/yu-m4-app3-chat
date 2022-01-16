import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB65s-inYmYXVQOEfkNsP-lqnJkkHFBrHo",
    authDomain: "my-chat-908c9.firebaseapp.com",
    projectId: "my-chat-908c9",
    storageBucket: "my-chat-908c9.appspot.com",
    messagingSenderId: "444787085054",
    appId: "1:444787085054:web:a85a4a5dd1f60bff9b5faf",
    measurementId: "G-5FM1640Y43"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;
