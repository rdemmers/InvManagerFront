import { FETCH_ORDERS, CREATE_ORDER, SET_ORDERSTATE} from '../actions';
import _ from 'lodash';

export default function(state = {}, action){

    switch (action.type) {
      case FETCH_ORDERS:
        return _.mapKeys(action.payload.data, 'id');
      case CREATE_ORDER:
        return {...state};
      default:
        return state;

    }


}
