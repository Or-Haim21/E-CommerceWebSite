// Action types
export const LOAD_USERS = 'LOAD_USERS';
export const ADD_NEW_USER = 'ADD_NEW_USER';

// Action creators
export const loadUsers = (users) => ({
  type: LOAD_USERS,
  payload: users,
});

export const addNewUser = (user) => ({
  type: ADD_NEW_USER,
  payload: user,
});
