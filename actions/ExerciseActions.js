import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EXERCISES_FETCH,
  EXERCISE_CREATE
} from './types';

export const exercisesFetch = () => {
  return {
    type: EXERCISES_FETCH,
    payload: [
      { "exercises": {
        "Chest": [],
        "Back": [],
        "Shoulders": [],
        "Legs": [],
        "Arms": [],
        "Abs": []
      }
      }
    ]
  }
  // return (dispatch) => {
  //   firebase.database().ref(`/exercises/`)
  //   .on('value', data => {
  //     dispatch({ type: EXERCISES_FETCH, payload: data.val() })
  //   })
  // }
}

export const exerciseCreate = ({ title }) => {
  return (dispatch) => {
    firebase.database().reference(`/`)
    .push({ title })
  }
}

export const exerciseSave = () => {

}

export const exerciseDelete = () => {

}
