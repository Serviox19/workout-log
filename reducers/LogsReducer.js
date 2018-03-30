import {
  EXERCISE_LOGS_FETCH,
  EXERCISE_LOG_CREATE,
  EXERCISE_LOG_DELETE
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXERCISE_LOGS_FETCH:
      return action.payload;
    case EXERCISE_LOG_CREATE:
      return INITIAL_STATE;
    case EXERCISE_LOG_DELETE:
      return INITIAL_STATE;
    default:
      return state;
  }
}
