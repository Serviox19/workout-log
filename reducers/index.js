import { combineReducers } from 'redux';
import ExerciseReducer from './ExercisesReducer';
import ExerciseDetailReducer from './ExerciseDetailReducer';

export default combineReducers({
  exercises: ExerciseReducer,
  logs: ExerciseDetailReducer
});
