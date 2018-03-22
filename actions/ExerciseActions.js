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
    console.log('Type: ' + type);
    console.log('Exercise: ' + exercise);

    let dbRef = firebase.database().ref('/exercises');

    dbRef.child('types').push({ name: type });

    // dbRef.on("value").then(function(exerciseTypes) {
    //   return exerciseTypes.forEach(function(snapshot) {
    //     snapshot.forEach(function(data) {
    //       console.log(data);
    //       if (data.val() === type) {
    //         console.log('just add the workout');
    //       } else {
    //         console.log('add new type');
    //       }
    //     });
    //   });
    // });
  }
}

export const exerciseSave = () => {}

export const exerciseDelete = () => {}
