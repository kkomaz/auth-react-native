import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: null,
    };
    this.renderContent = this.renderContent.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDbQzA9fwY2lx2kEp_Oor4clkiWuYjFZBk',
      authDomain: 'auth-37973.firebaseapp.com',
      databaseURL: 'https://auth-37973.firebaseio.com',
      projectId: 'auth-37973',
      storageBucket: 'auth-37973.appspot.com',
      messagingSenderId: '478882518699'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  logOut() {
    firebase.auth().signOut()
      .then(this.setState({ loggedIn: false }));
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button
              onPress={this.logOut}
            >
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
