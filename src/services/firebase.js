import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyC4SO5__r8eSQK_yk_tLkMf4j8RsM--u7w",
  authDomain: "vqueue-dfff2.firebaseapp.com",
  databaseURL: "https://vqueue-dfff2.firebaseio.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
