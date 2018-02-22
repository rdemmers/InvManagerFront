import { FETCH_PRODUCTS, UPDATE_PRODUCT} from '../actions';
import _ from 'lodash';

export default function(state = {}, action){

    switch (action.type) {
      case FETCH_PRODUCTS:
        return _.mapKeys(action.payload.data, 'id');
      case UPDATE_PRODUCT:
        return {...state, [action.payload.id]: action.payload};
      default:
        return state;

    }


}
