import { combineReducers } from 'redux';
import ProductReducer from './reducer_products';

const rootReducer = combineReducers({
  products: ProductReducer
});

export default rootReducer;
