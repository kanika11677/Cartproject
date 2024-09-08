import { createStore, combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

const store = createStore(rootReducer);
export default store