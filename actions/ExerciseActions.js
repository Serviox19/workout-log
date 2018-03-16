import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EXERCISES_FETCH,
  EXERCISE_CREATE
} from './types';

export const exercisesFetch = () => {

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
