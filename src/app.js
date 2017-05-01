import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDbQzA9fwY2lx2kEp_Oor4clkiWuYjFZBk',
      authDomain: 'auth-37973.firebaseapp.com',
      databaseURL: 'https://auth-37973.firebaseio.com',
      projectId: 'auth-37973',
      storageBucket: 'auth-37973.appspot.com',
      messagingSenderId: '478882518699'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
