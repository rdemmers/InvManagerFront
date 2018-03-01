import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import ProductReducer from './reducer_products';
import ActiveReducer from './reducer_activeProduct';
import LowReducer from './reducer_lowProducts';
import userReducer from './reducer_user';
import InventoryStateReducer from './reducer_inventoryState';
import SuppliersReducer from './reducer_suppliers';

const rootReducer = combineReducers({
  products: ProductReducer,
  activeProduct: ActiveReducer,
  lowProducts: LowReducer,
  inventoryState: InventoryStateReducer,
  suppliers: SuppliersReducer,
  form: formReducer,
  user: userReducer
});

export default rootReducer;
