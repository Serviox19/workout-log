import {
  CATEGORY_CREATE,
  CATEGORY_FETCH
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORY_CREATE:
      return INITIAL_STATE;
    case CATEGORY_FETCH:
      return action.payload;
    default:
      return state;
  }
}
