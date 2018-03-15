import { FETCH_LOW} from '../actions';
import _ from 'lodash';

export default function(state = {}, action){

    switch (action.type) {
      case FETCH_LOW:
        return action.payload.data;
      default:
        return state;

    }


}
