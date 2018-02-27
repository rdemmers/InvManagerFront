import { SET_INVENTORYSTATE} from '../actions';
import _ from 'lodash';

export default function(state = null, action){

    switch (action.type) {
      case SET_INVENTORYSTATE:
        return action.payload;
      default:
        return state;

    }


}
