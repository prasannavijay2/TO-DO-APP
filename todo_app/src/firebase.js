import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBgWmWUZvmZW91DsR8fzc0E5tIrrCwexG0",
  authDomain: "todo-app-mp-4bd4f.firebaseapp.com",
  databaseURL: "https://todo-app-mp-4bd4f.firebaseio.com",
  projectId: "todo-app-mp-4bd4f",
  storageBucket: "todo-app-mp-4bd4f.appspot.com",
  messagingSenderId: "662586274538",
  appId: "1:662586274538:web:e7cb032761eda956df5d93",
  measurementId: "G-BR85DKV2T9"

});

const db=firebaseApp.firestore();

export {db};