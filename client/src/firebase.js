import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4CKt5ZZZwOJdRrJyg8JGJuLsWnfzf1jQ",
    authDomain: "react-blog-test-31312.firebaseapp.com",
    projectId: "react-blog-test-31312",
    storageBucket: "react-blog-test-31312.appspot.com",
    messagingSenderId: "1055127147361",
    appId: "1:1055127147361:web:a6a104fd45d6a0fc912b20"
};

firebase.initializeApp(firebaseConfig);

export default firebase;