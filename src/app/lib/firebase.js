// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";



// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyDWbFs_RtXI5uSV72SWlSLPj5tEXZyV_D8",

    authDomain: "wordcount-48b0a.firebaseapp.com",

    projectId: "wordcount-48b0a",

    storageBucket: "wordcount-48b0a.firebasestorage.app",

    messagingSenderId: "20688342587",

    appId: "1:20688342587:web:c72c5282e814b60d66561e",

    measurementId: "G-C3C4972CNX"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);