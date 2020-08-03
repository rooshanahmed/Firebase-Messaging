importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyDpT3czTJy5vgCdUMS8kZJqxary7dg9OZU",
    authDomain: "fir-messaging-607f7.firebaseapp.com",
    databaseURL: "https://fir-messaging-607f7.firebaseio.com",
    projectId: "fir-messaging-607f7",
    storageBucket: "fir-messaging-607f7.appspot.com",
    messagingSenderId: "760683146700",
    appId: "1:760683146700:web:e4d04477744cce140ac169"
})

firebase.messaging();