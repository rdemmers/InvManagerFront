import { FILTER_TABLE} from '../actions';

export default function(state = {}, action){

    switch (action.type) {
      case FILTER_TABLE:
        return action.payload;
      default:
        return state;

    }


}
