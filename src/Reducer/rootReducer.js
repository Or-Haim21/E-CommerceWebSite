import { combineReducers } from 'redux';

// Initial states for each slice
const initialUsersState = [];
const initialOrdersState = [];
const initialCategoriesState = [];
const initialProductsState = [];

// Users Reducer
const usersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return action.payload;

        case 'ADD_NEW_USER':
            return [...state, action.payload];

        default:
            return state;
    }
};

// Orders Reducer
const ordersReducer = (state = initialOrdersState, action) => {
    switch (action.type) {
        case 'LOAD_ORDERS':
            return action.payload;

        default:
            return state;
    }
};

// Categories Reducer
const categoriesReducer = (state = initialCategoriesState, action) => {
    switch (action.type) {
        case 'LOAD_CATEGORIES':
            return action.payload;

        default:
            return state;
    }
};

// Products Reducer
const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return action.payload;

        default:
            return state;
    }
};

// Combine all reducers into a single rootReducer
const rootReducer = combineReducers({
    users: usersReducer,
    orders: ordersReducer,
    categories: categoriesReducer,
    products: productsReducer,
});

export default rootReducer;
