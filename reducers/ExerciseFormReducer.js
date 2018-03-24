import {
  CATEGORY_CREATE,
  EXERCISE_CREATE
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXERCISE_CREATE:
      return INITIAL_STATE;
    case CATEGORY_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}
