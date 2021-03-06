import { combineReducers } from 'redux';
import ExerciseReducer from './ExerciseReducer';
import ExerciseFormReducer from './ExerciseFormReducer';
import CategoryReducer from './CategoryReducer';
import LogsReducer from './LogsReducer';

export default combineReducers({
  categories: CategoryReducer,
  exercises: ExerciseReducer,
  exerciseForm: ExerciseFormReducer,
  logs: LogsReducer
});
