import { GET_USER} from '../actions';
import _ from 'lodash';

export default function(state = {}, action){

    switch (action.type) {
      case GET_USER:
        return action.payload.data[0].authority;

      default:
        return state;

    }


}
