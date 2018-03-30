import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EXERCISE_LOGS_FETCH,
  EXERCISE_LOG_CREATE,
  EXERCISE_LOG_DELETE
} from './types';

export const exerciseLogsFetch = ({ categoryId, exerciseKey }) => {
  return (dispatch) => {
    const uri = `/exercises/types/${categoryId}/workouts/${exerciseKey}/logs`;

    firebase.database().ref(uri)
    .on('value', snapshot => {
      dispatch({ type: EXERCISE_LOGS_FETCH, payload: snapshot.val() });
    });
  }
}

export const exerciseLogCreate = ({ categoryId, exerciseKey, log }) => {
  return (dispatch) => {
      const uri = `/exercises/types/${categoryId}/workouts/${exerciseKey}/logs`;
      firebase.database().ref(uri)
      .push({ log })
      .then(() => {
        dispatch({ EXERCISE_LOG_CREATE });
      })
  }
}

export const exerciseLogDelete = ({ categoryId, exerciseKey, logKey }) => {
  return (dispatch) => {

  }
}

export const exerciseLogUpdate = ({ categoryId, exerciseKey, logKey }) => {
  return (dispatch) => {

  }
}
