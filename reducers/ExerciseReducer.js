import {
  EXERCISES_FETCH,
  EXERCISE_DELETE
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXERCISES_FETCH:
      return action.payload;
    case EXERCISE_DELETE:
      return INITIAL_STATE;
    default:
      return state;
  };
}
