import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  CATEGORY_CREATE,
  CATEGORY_FETCH
} from './types';

export const categoriesFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/exercises')
    .on('value', snapshot => {
      dispatch({ type: CATEGORY_FETCH, payload: snapshot.val() });
      Actions.workout({ type: 'reset' });
    });
  }
}

export const categoryCreate = ({ type }) => {
  return (dispatch) => {
    console.log('Type: ' + type);

    firebase.database().ref('/exercises/types')
    .push({ name: type })
    .then(() => {
      dispatch({ CATEGORY_CREATE });
      Actions.workout({ type: 'reset' });
    });
  }
}
