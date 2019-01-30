import { GOOGLE_SIGNIN, GOOGLE_SIGNOUT } from '../actions/types';

const INTIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case GOOGLE_SIGNIN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case GOOGLE_SIGNOUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
