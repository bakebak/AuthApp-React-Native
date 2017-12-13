import	React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBjNpC8sZgN-z-TxcI9EL9yOBBZdeu8IPA',
      authDomain: 'authentication-c8c3b.firebaseapp.com',
      databaseURL: 'https://authentication-c8c3b.firebaseio.com',
      projectId: 'authentication-c8c3b',
      storageBucket: 'authentication-c8c3b.appspot.com',
      messagingSenderId: '795791495317'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn){
      case true:
        return(
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        );
    }
  }

  render(){
    return(
      <View>
      <Header headerText="Authentication" />
      {this.renderContent()}
      </View>
    );
  }
}

export default App;
