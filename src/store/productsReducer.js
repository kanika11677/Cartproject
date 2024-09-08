// Actions
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const ADD_PRODUCTLIST = 'ADD_PRODUCTLIST';


// Initial State
const initialState = {
    products: [
    ],
};

// Reducer
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTLIST:
            return {
                products: action.payload,
            };

        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
            };    
        default:
            return state;
    }
};

export default productsReducer;
