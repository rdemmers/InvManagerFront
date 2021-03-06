import { FETCH_PRODUCTS, UPDATE_PRODUCT, CREATE_PRODUCT, MUTATE_PRODUCT, DELETE_PRODUCT} from '../actions';
import _ from 'lodash';

export default function(state = {}, action){

    switch (action.type) {
      case FETCH_PRODUCTS:
        return _.mapKeys(action.payload.data, 'id');
      case UPDATE_PRODUCT:
        return {...state};
      case MUTATE_PRODUCT:
        return {...state};
      case CREATE_PRODUCT:
        return {...state};
      case DELETE_PRODUCT:
        return {...state};
      default:
        return state;

    }


}
