//import { v4 as uuidv4 } from 'uuid';

const initialState = {
    users: [],
    orders: [],
    categories: [],
    Products: [],
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD': {
            return {...state, users: action.payload};
        }

        default:
            return state;
    }
    
};

export default usersReducer;
