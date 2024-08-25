const initialState = {
    users: [],
    orders: [],
    categories: [],
    products: [],
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD': {
            const { dataType, payload } = action;
            return {
                ...state,
                [dataType]: payload
            };
        }
        default:
            return state;
    }
};

export default usersReducer;
