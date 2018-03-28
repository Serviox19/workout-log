import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EXERCISES_FETCH,
  EXERCISE_CREATE,
  EXERCISE_DELETE
} from './types';

export const exerciseCreate = ({ categoryId, exercise }) => {
  return (dispatch) => {

    firebase.database().ref(`/exercises/types/${categoryId}/workouts`)
    .push({
      name: exercise,
      logs: {}
    })
    .then(() => {
      dispatch({ EXERCISE_CREATE });
    });
  }
}

export const exercisesFetch = ({ categoryId }) => {
  return (dispatch) => {
    console.log(` category: ${categoryId} `);

    firebase.database().ref(`/exercises/types/${categoryId}/workouts`)
    .on('value', snapshot => {
      dispatch({ type: EXERCISES_FETCH, payload: snapshot.val() });
    });
  }
}

export const exerciseDelete = ({ key }) => {
  return (dispatch) => {
    
  }
}
