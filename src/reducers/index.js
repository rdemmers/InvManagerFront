import { combineReducers } from 'redux';
import ProductReducer from './reducer_products';
import ActiveReducer from './reducer_activeProduct';

const rootReducer = combineReducers({
  products: ProductReducer,
  activeProduct: ActiveReducer
});

export default rootReducer;
