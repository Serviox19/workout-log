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
    })
  }
}

export const exerciseCreate = ({ type, exercise }) => {
  return (dispatch) => {
    console.log(type);
    console.log(exercise);

    firebase.database().ref(`/exercises`)
    .push({ type, exercise })
    .then(() => {
      dispatch({ type: EXERCISE_CREATE });
      Actions.workout({ type: 'reset' });
    })
  }
}

export const exerciseSave = () => {}

export const exerciseDelete = () => {}
