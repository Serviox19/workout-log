import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EXERCISES_FETCH,
  EXERCISE_CREATE
} from './types';

export const exerciseCreate = ({ id, exercise }) => {
  return (dispatch) => {
    console.log(`id: ${id}, exercise: ${exercise}`);

    let dbRef = firebase.database().ref(`/exercises/types/${id}/workouts`);

    dbRef.push.set({
      name: exercise
    });
  }
}
