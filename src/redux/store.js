import { combineReducers } from 'redux';
import usersReducer from './users/usersReducer';
import currentUserReducer from './current-user/currentUserReducer';

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer,
});

export default rootReducer;