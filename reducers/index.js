import { combineReducers } from 'redux';
import ExerciseReducer from './ExerciseReducer';
import ExerciseDetailReducer from './ExerciseDetailReducer';

export default combineReducers({
  exercises: ExerciseReducer,
  logs: ExerciseDetailReducer
});
