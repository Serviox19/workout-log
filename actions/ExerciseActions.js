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
      { type: "Chest", "exercises": [], "logs": [] },
      { type: "Back", "exercises": [], "logs": [] },
      { type: "Shoulders", "exercises": [], "logs": [] },
      { type: "Legs", "exercises": [], "logs": [] },
      { type: "Arms", "exercises": [], "logs": [] },
      { type: "Abs", "exercises": [], "logs": [] }
    ]
  }
}

export const exerciseCreate = () => {}

export const exerciseSave = () => {

}

export const exerciseDelete = () => {

}
