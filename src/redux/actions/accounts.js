import {
  ALL_ACCOUNTS,
  EDIT_ACCOUNT,
  CREATE_ACCOUNT,
  SINGLE_ACCOUNT,
  REMOVE_ACCOUNT
  
} from './actionTypes';

import axios from 'axios';
var api='102.392.239.21';

function getAccounts() {
  let query = `
    query getTodos {
      todos {
        _id
        todo
        completed
      }
    }
  `;
  console.log("getAccounts called");

  return {
    type: ALL_ACCOUNTS,
    result:[
      {
        name:'Putin',
        img_src:'http://www.fullredneck.com/wp-content/uploads/2016/04/Funny-Russia-Meme-20.jpg'
      },
      {
        name:'PutinFIRE',
        img_src:'https://s-media-cache-ak0.pinimg.com/736x/92/bd/51/92bd51939ce6e27f773aee3516b2cd6f.jpg'
      },
      {
        name:"dogface",
        img_src:'https://s-media-cache-ak0.pinimg.com/736x/e5/9c/46/e59c46a6c965ede88510c22376870642.jpg'
      },
      {
        name:'humptyDumpty',
        img_src:'https://sports-images.vice.com/images/2017/01/25/when-nick-young-the-basketball-player-met-nick-young-the-meme-body-image-1485378510.jpg'
      },
            {
        name:'Putin',
        img_src:'http://www.fullredneck.com/wp-content/uploads/2016/04/Funny-Russia-Meme-20.jpg'
      },
      {
        name:'PutinFIRE',
        img_src:'https://s-media-cache-ak0.pinimg.com/736x/92/bd/51/92bd51939ce6e27f773aee3516b2cd6f.jpg'
      },
      {
        name:"dogface",
        img_src:'https://s-media-cache-ak0.pinimg.com/736x/e5/9c/46/e59c46a6c965ede88510c22376870642.jpg'
      },
      {
        name:'humptyDumpty',
        img_src:'https://sports-images.vice.com/images/2017/01/25/when-nick-young-the-basketball-player-met-nick-young-the-meme-body-image-1485378510.jpg'
      },

    ] 

    
  };

  // return dispatch => {
  //   return axios.post(api, {
  //     query
  //   }).then((result) => {
  //     if (result.data.errors) {
  //       dispatch({
  //         type: ALL_TODOS,
  //         error: result.data.errors,
  //       })
  //       return;
  //     }

  //     dispatch({
  //       type: ALL_TODOS,
  //       result: result.data.data.todos,
  //     });
  //   });
  // };
}

function getAccount(variables) {
  let query = `
    query getTodo($_id: String!) {
      todo(_id: $_id) {
        _id
        todo
        completed
      }
    }
  `;

  return dispatch => {
    return axios.post(GraphQLEndpoint, {
      query,
      variables,
    }).then((result) => {
      if (result.data.errors) {
        dispatch({
          type: SINGLE_ACCOUNT,
          error: result.data.errors,
        });
        return;
      }

      dispatch({
        type: SINGLE_ACCOUNT,
        result: result.data.data.todo,
      });
    })
  };
}

function createAccount(variables) {
  let query = `
    mutation createTodoMutation($todo: String!) {
      createTodo(todo: $todo) {
        _id
        todo
        completed
      }
    }
  `;

  return dispatch => {
    return axios.post(GraphQLEndpoint, {
      query,
      variables,
    }).then((result) => {
      if (result.data.errors) {
        dispatch({
          type: CREATE_ACCOUNT,
          error: result.data.errors,
        })
        return;
      }

      dispatch({
        type: CREATE_ACCOUNT,
        result: result.data.data.createTodo,
      });
    });
  };
}

function selectAccount(account) {
  console.log('here!');
  return({
    type:"ASSFUCK",
  })
}

function updateAccount(variables) {
  let query = `
    mutation updateTodoMutation($_id: String!, $todo: String, $completed: Boolean) {
      updateTodo(_id: $_id, todo: $todo, completed: $completed) {
        _id
        todo
        completed
      }
    }
  `;

  return dispatch => {
    return axios.post(GraphQLEndpoint, {
      query,
      variables,
    }).then((result) => {
      if (result.data.errors) {
        dispatch({
          type: EDIT_ACCOUNT,
          error: result.data.errors,
        })
        return;
      }

      dispatch({
        type: EDIT_ACCOUNT,
        result: result.data.data.updateTodo,
      });
    });
  };
}

function removeAccount(variables) {
  let query = `
    mutation removeTodoMutation($_id: String!) {
      removeTodo(_id: $_id) {
        _id
      }
    }
  `;

  return dispatch => {
    return axios.post(GraphQLEndpoint, {
      query,
      variables
    }).then((result) => {
      if (result.data.errors) {
        dispatch({
          type: REMOVE_ACCOUNT,
          error: result.data.errors,
        })
        return;
      }

      dispatch({
        type: REMOVE_ACCOUNT,
        result: result.data.data.removeTodo,
      });
    });
  };
}

module.exports = {
  getAccount,
  getAccounts,
  createAccount,
  updateAccount,
  removeAccount,
  selectAccount
};
