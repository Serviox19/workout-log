import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EXERCISES_FETCH,
  EXERCISE_CREATE
} from './types';

export const exercisesFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/exercises')
    .on('value', snapshot => {
      dispatch({ type: EXERCISES_FETCH, payload: snapshot.val() })
      Actions.workout({ type: 'reset' });
    });
  }
}

export const categoryCreate = ({ type }) => {
  return (dispatch) => {
    console.log('Type: ' + type);

    let dbRef = firebase.database().ref('/exercises');

    dbRef.child('types').push({ name: type });
  }
}

export const exerciseSave = () => {}

export const exerciseDelete = () => {}
