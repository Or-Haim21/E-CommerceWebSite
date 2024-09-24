import { LOAD_USERS, ADD_NEW_USER } from "./userActions";

const initialCurrentUserState = {
  username: null,
  type: null,
};

// Users reducer
const currentUserReducer = (state = initialCurrentUserState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
    case SIGN_OUT:
      return initialCurrentUserState;
    default:
      return state;
  }
};

export default currentUserReducer;
