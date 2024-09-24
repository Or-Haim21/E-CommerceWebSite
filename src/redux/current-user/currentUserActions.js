// Action types
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

// Action creators
export const signin = (username, type) => ({
  type: SIGN_IN,
  payload: { username, type },
});

export const signout = () => ({
  type: SIGN_OUT,
  payload: null,
});
