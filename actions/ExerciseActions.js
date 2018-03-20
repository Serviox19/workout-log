import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EXERCISES_FETCH,
  EXERCISE_CREATE
} from './types';

export const exercisesFetch = () => {
  return {
    type: EXERCISES_FETCH,
    payload: {
      "categories": [
        { type: "Chest", "exercises": [], "logs": [] },
        { type: "Back", "exercises": [], "logs": [] },
        { type: "Shoulders", "exercises": [], "logs": [] },
        { type: "Legs", "exercises": [], "logs": [] },
        { type: "Arms", "exercises": [], "logs": [] },
        { type: "Abs", "exercises": [], "logs": [] }
      ]
    }
  }
}

export const exerciseCreate = ({ category, name }) => {
  return (dispatch) => {
    console.log(category);
    console.log(name);

    firebase.database().ref(`/exercises`)
    .push({ category, name })
    .then(() => {
      dispatch({ type: EXERCISE_CREATE });
      Actions.workout({ type: 'reset' });
    })
  }
}

export const exerciseSave = () => {}

export const exerciseDelete = () => {}
