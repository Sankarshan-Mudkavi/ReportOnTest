import {
  ALL_USERS
} from '../actions/actionTypes';


function users(state = [], action) {
  

  switch(action.type) {
    case ALL_USERS:
      return {
        result: action.resp
      };
    default:
      return state;
  }
}

module.exports = {
  users,
};
