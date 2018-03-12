import { SET_ORDERSTATE} from '../actions';
import _ from 'lodash';

export default function(state = null, action){

    switch (action.type) {
      case SET_ORDERSTATE:
        return action.payload;
      default:
        return state;

    }


}
