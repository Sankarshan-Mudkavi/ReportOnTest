import {

  CREATE_CAMPAIGN,
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

function campaigns(state = [], action) {
  
  if (action.error) {
    return {
      result: state.result,
      error: action.error,
    };
  }

  switch(action.type) {
    case CREATE_CAMPAIGN:
      console.log("campaignsREducer RESPONDING " + action.result);
      // var existingAcc = action.result.slice();
      // var existingIds = existingAcc.map((account) => {return account.id});
      // var indexOfId = existingIds.indexOf(action.result.id);
      // console.log("did we find the createdAccount... ie are we editing or not? indexOf:" + indexOfId );
      // if (indexOfId != -1) {
      //   existingAcc[indexOfId] = action.result
      // }
      // else {
      //   existingAcc.unshift(action.result)
      // }
      return {
        // result: existingAcc,
        editing: action.result
      };
    default:
      return state;
  }
}

module.exports = {
  campaigns,
};
