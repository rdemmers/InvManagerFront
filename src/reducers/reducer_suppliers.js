import { FETCH_SUPPLIERS} from '../actions';
import _ from 'lodash';

export default function(state = {}, action){

    switch (action.type) {
      case FETCH_SUPPLIERS:
        return _.mapKeys(action.payload.data, 'supplierId');
      default:
        return state;

    }


}
