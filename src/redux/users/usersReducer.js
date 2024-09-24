import { LOAD_USERS, ADD_NEW_USER } from './userActions';

const initialUsersState = [];

// Users reducer
const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.payload;

    case ADD_NEW_USER:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default usersReducer;
