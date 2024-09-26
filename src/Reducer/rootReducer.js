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
        case 'ADD_NEW_ORDER':
            return [...state, action.payload];
        default:
            return state;
    }
};

// Categories Reducer
const categoriesReducer = (state = initialCategoriesState, action) => {
    switch (action.type) {
        case 'LOAD_CATEGORIES':
            return action.payload;
        case 'UPDATE_CATEGORY':
            const updatedCategories = state.filter(category => category.id !== action.payload.id);
            return [...updatedCategories, action.payload];
        case 'ADD_NEW_CATEGORY':
            return [...state, action.payload];
        case 'REMOVE_CATEGORY':
            const filterCategories = state.filter(category => category.id !== action.payload);
            return filterCategories;
        default:
            return state;
    }
};

// Products Reducer
const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return action.payload;
        case 'UPDATE_PRODUCT':
            const updatedProducts = state.filter(product => product.id !== action.payload.id);
            return [...updatedProducts, action.payload];
        case 'ADD_NEW_PRODUCT':
            return [...state, action.payload];
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    users: usersReducer,
    orders: ordersReducer,
    categories: categoriesReducer,
    products: productsReducer,
});

export default rootReducer;
