import {
  EXERCISES_FETCH,
  EXERCISE_CREATE
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXERCISES_FETCH:
      return action.payload;
    case EXERCISE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  };
}
