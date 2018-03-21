import { EXERCISE_CREATE } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXERCISE_CREATE:
    console.log(action);
      return action.payload;
    default:
      return state;
  }
}
