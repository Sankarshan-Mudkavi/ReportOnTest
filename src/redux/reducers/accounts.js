import {
  ALL_ACCOUNTS,
  EDIT_ACCOUNT,
  REMOVE_ACCOUNT,
  SINGEL_ACCOUNT,
  CREATE_ACCOUNT,
} from '../actions/actionTypes';

function getIndexOfTodoItem(action, state) {
  let index = -1, data = action.result;

  for (let i = 0; i < state.result.length; i++) {
    if (state.result[i]._id === data._id) {
      index = i;
      break;
    }
  }

  return index;
}

function accounts(state = [], action) {
  
  if (action.error) {
    return {
      result: state.result,
      error: action.error,
    };
  }

  switch(action.type) {
    case SINGEL_ACCOUNT:
    case ALL_ACCOUNTS:
    
      return {
        result: action.resp
      };
    case CREATE_ACCOUNT:
      var existingAcc = state.result.slice();
      var existingIds = existingAcc.map((account) => {return account.id});
      var indexOfId = existingIds.indexOf(action.result.id);
      console.log("did we find the createdAccount... ie are we editing or not? indexOf:" + indexOfId );
      if (indexOfId != -1) {
        existingAcc[indexOfId] = action.result
      }
      else {
        existingAcc.unshift(action.result)
      }
      return {
        result: existingAcc,
        editing: action.result
      };



    case EDIT_ACCOUNT:
      var index = getIndexOfTodoItem(action, state);

      // todo item not found in state object so return original state
      if (index === -1) return state;

      // todo item found! return new state
      return {
        result: [
          ...state.result.slice(0, index),
          Object.assign({}, state.result[index], action.result),
          ...state.result.slice(index + 1)
        ]
      };
    case REMOVE_ACCOUNT:
      var index = getIndexOfTodoItem(action, state);

      // todo item not found in state object so return original state
      if (index === -1) return state;

      // todo item found! don't include it in the new state
      return {
        result: [
          ...state.result.slice(0, index),
          ...state.result.slice(index + 1)
        ],
      };
    default:
      return state;
  }
}

module.exports = {
  accounts,
};
