import React from 'react';
import firebase from './Firebase';
import './App.css';

function App() {

  const messaging = firebase.messaging();

  messaging.requestPermission().then(() => {
    return messaging.getToken()
  }).then((token) => {
    console.log('token',token);
  })

  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
