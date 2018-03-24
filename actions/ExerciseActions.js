import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EXERCISES_FETCH,
  EXERCISE_CREATE,
  CATEGORY_CREATE,
} from './types';

export const categoriesFetch = () => {
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

    let dbRef = firebase.database().ref('/exercises/types')
    .push({ name: type })
    .then(() => {
      dispatch({ CATEGORY_CREATE });
      Actions.categoryList({ type: 'reset' });
    });
  }
}

export const exerciseCreate = ({ id, exercise }) => {
  return (dispatch) => {
    console.log(`id: ${id}, exercise: ${exercise}`);

    let dbRef = firebase.database().ref(`/exercises/types/${id}/workouts`);

    dbRef.push.set({
      name: exercise
    });
  }
}

export const workoutsFetch = () => {

}
