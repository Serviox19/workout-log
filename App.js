import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import firebase from 'firebase';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDP9MZ1lheIaggcg8rxk7gHbrzjq6s20FA",
      authDomain: "workout-app-2a5e4.firebaseapp.com",
      databaseURL: "https://workout-app-2a5e4.firebaseio.com",
      projectId: "workout-app-2a5e4",
      storageBucket: "workout-app-2a5e4.appspot.com",
      messagingSenderId: "463525538817"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
