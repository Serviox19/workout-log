import { combineReducers } from 'redux';
import ExerciseReducer from './ExerciseReducer';
import ExerciseDetailReducer from './ExerciseDetailReducer';
import ExerciseFormReducer from './ExerciseFormReducer';

export default combineReducers({
  exercises: ExerciseReducer,
  exerciseForm: ExerciseFormReducer,
  logs: ExerciseDetailReducer
});
