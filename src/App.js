import	React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyBjNpC8sZgN-z-TxcI9EL9yOBBZdeu8IPA',
        authDomain: 'authentication-c8c3b.firebaseapp.com',
        databaseURL: 'https://authentication-c8c3b.firebaseio.com',
        projectId: 'authentication-c8c3b',
        storageBucket: 'authentication-c8c3b.appspot.com',
        messagingSenderId: '795791495317'
      });
  }

  render(){
    return(
      <View>
      <Header headerText="Authentication" />
      <LoginForm />
      </View>
    );
  }
}

export default App;
