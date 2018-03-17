import { UPDATE_FILTER } from '../actions/user-actions';

const userReducer = (state = '', {type, payload}) => {
  switch (type) {
    case UPDATE_FILTER:
      return payload.filter;
    default:
      return state;    
  }
}

export default userReducer;