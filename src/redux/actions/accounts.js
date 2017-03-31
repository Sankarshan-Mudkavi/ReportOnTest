import {
  ALL_ACCOUNTS,
  EDIT_ACCOUNT,
  CREATE_ACCOUNT,
  SINGLE_ACCOUNT,
  REMOVE_ACCOUNT,
  LOGIN,
  LOGIN_REG,
  LOGIN_ER,
  LOGOUT,
  LOGIN_REDIR
} from './actionTypes';
import Api from '../../api';
import cookie from 'react-cookie';

function setLoginRedirect(value) {
  return ({
    type:LOGIN_REDIR,
    resp:value
  })
}

function fetchLogin(value) {
  console.log("fetchLogin running");
  var body = {};
  if (value) {
    body = {
      user: {
        email: value.username,
        password: value.password
      }
    };
  }
  return (dispatch) => {
    return Api.post("/users/sign_in.json", body)
      .then(resp => {
        console.log("fetchLogin response " + JSON.stringify(resp))
        if (resp.error != null) {
          if (!resp.error.includes("sign in")) {
            alert("Error" + resp.error);
          }   
          dispatch(setLoginStatus('false', resp, true));
        } else {
          
          //THIS PART MEANS WE'RE LOGGED IN
          // storeToken(resp.token);
          if (value) {
            /* ONLY IF ITS A LOGIN ---- SO WE SHOULD STORE REGISTRATION JSON*/
            dispatch(setLoginStatus('true', resp));
            // Actions.blankTransition({ nextScene: "registerPage1", resp });
          } else {            
            dispatch(setLoginStatus('true', resp));
          }
        }
      })
      .catch(ex => {
        console.log("FUCKING ERROR FROM FETCHLOGIN  " + ex.toString());
        alert("🤔" + ex.toString());
        dispatch(setLoginStatus('false', { }, true));
        // dispatch(setLoginStatus(false, { }, true));
      });
  };
}

function setLoginStatus(success, resp, error) {
  if (success == "true") {
    console.log("setting login status! as true!");
    return {
      type: LOGIN,
      resp
    };
  } 
  if (success == "register") {
    return {
      type: LOGIN_REG, resp 
    }
  }
  else {
    if (error == true) {
      return {
        type: LOGIN_ER
      };
    }
    console.log("logging out from actions!");
    return {
      type: LOGOUT
    };
  }
}





function fetchData(path) {
  var userID = cookie.load('id') || 0;
  // userID = 3;
  console.log("fetchData running for path " + path);
  var fullPath = "/" + path + "/show?id="+userID;
  return (dispatch, getState) => {
    return Api.get(fullPath)
    
      .then(resp => {
        if (resp.error != null) {
          if (!resp.error.includes("sign in")) {
            alert("Error" + resp.error);
            dispatch(setData('error'));
          } else {
            console.log("setting loginstatus from fetchData");
            dispatch(setLoginStatus('false', resp));
          }
        } else {
          
          // var resp = {
          //   resp:[
          //     {
          //       title:'Putin',
          //       img_url:'http://www.fullredneck.com/wp-content/uploads/2016/04/Funny-Russia-Meme-20.jpg'
          //     },
          //     {
          //       title:'PutinFIRE',
          //       img_url:'https://s-media-cache-ak0.pinimg.com/736x/92/bd/51/92bd51939ce6e27f773aee3516b2cd6f.jpg'
          //     },
          //     {
          //       title:"dogface",
          //       img_url:'https://s-media-cache-ak0.pinimg.com/736x/e5/9c/46/e59c46a6c965ede88510c22376870642.jpg'
          //     },
          //     {
          //       title:'humptyDumpty',
          //       img_url:'https://sports-images.vice.com/images/2017/01/25/when-nick-young-the-basketball-player-met-nick-young-the-meme-body-image-1485378510.jpg'
          //     },
          //           {
          //       title:'Putin',
          //       img_url:'http://www.fullredneck.com/wp-content/uploads/2016/04/Funny-Russia-Meme-20.jpg'
          //     },
          //     {
          //       title:'PutinFIRE',
          //       img_url:'https://s-media-cache-ak0.pinimg.com/736x/92/bd/51/92bd51939ce6e27f773aee3516b2cd6f.jpg'
          //     },
          //     {
          //       title:"dogface",
          //       img_url:'https://s-media-cache-ak0.pinimg.com/736x/e5/9c/46/e59c46a6c965ede88510c22376870642.jpg'
          //     },
          //     {
          //       title:'humptyDumpty',
          //       img_url:'https://sports-images.vice.com/images/2017/01/25/when-nick-young-the-basketball-player-met-nick-young-the-meme-body-image-1485378510.jpg'
          //     },
          //   ] 
          // }
          // dispatch(setData(path, resp.resp));
          dispatch(setLoginStatus('true', resp));
          
          dispatch(setData(path, resp));
        }
      })
      .catch(ex => {
        console.log("FUCKING ERROR FROM FETCH DATA " + ex.toString());
        alert("🤔 error fetching data... " + ex.toString());
        // throw new Error("error with network!");
        dispatch(setData("error"));
      });
  };


  // return dispatch => {
  //   dispatch(setData(path, {
  //     resp:[
  //       {
  //         title:'Putin',
  //         img_url:'http://www.fullredneck.com/wp-content/uploads/2016/04/Funny-Russia-Meme-20.jpg'
  //       },
  //       {
  //         title:'PutinFIRE',
  //         img_url:'https://s-media-cache-ak0.pinimg.com/736x/92/bd/51/92bd51939ce6e27f773aee3516b2cd6f.jpg'
  //       },
  //       {
  //         title:"dogface",
  //         img_url:'https://s-media-cache-ak0.pinimg.com/736x/e5/9c/46/e59c46a6c965ede88510c22376870642.jpg'
  //       },
  //       {
  //         title:'humptyDumpty',
  //         img_url:'https://sports-images.vice.com/images/2017/01/25/when-nick-young-the-basketball-player-met-nick-young-the-meme-body-image-1485378510.jpg'
  //       },
  //             {
  //         title:'Putin',
  //         img_url:'http://www.fullredneck.com/wp-content/uploads/2016/04/Funny-Russia-Meme-20.jpg'
  //       },
  //       {
  //         title:'PutinFIRE',
  //         img_url:'https://s-media-cache-ak0.pinimg.com/736x/92/bd/51/92bd51939ce6e27f773aee3516b2cd6f.jpg'
  //       },
  //       {
  //         title:"dogface",
  //         img_url:'https://s-media-cache-ak0.pinimg.com/736x/e5/9c/46/e59c46a6c965ede88510c22376870642.jpg'
  //       },
  //       {
  //         title:'humptyDumpty',
  //         img_url:'https://sports-images.vice.com/images/2017/01/25/when-nick-young-the-basketball-player-met-nick-young-the-meme-body-image-1485378510.jpg'
  //       },
  //     ] 

  //   }))};
      
}

function setData(type, resp) {
  console.log("setdata called! for type " + type);
  switch (type) {
    case "accounts":
      return {
        type: ALL_ACCOUNTS,
        resp
      };
    default:
      return {
        type: "DATA ERROR"
      };
  }
}


function createAccount(variables) {
  return dispatch => {
    var body = variables;
    return Api.post("/merchant/create.json", body)
    .then(result => {
      if (result.error != null) {
        if (!result.error.includes("sign in")) {
          dispatch({
            type: CREATE_ACCOUNT,
            error: result.error,
          });
        } 
        else {
          console.log("setting loginstatus from fetchData");
          dispatch(setLoginStatus('false', resp));
        }
      } else {
        // dispatch(setData(path, resp));
        
        dispatch({
          type: CREATE_ACCOUNT,
          result: result.merchant
        });
      }
    })
    .catch(ex => {
      console.log("FUCKING ERROR FROM CreateAccount " + ex.toString());
      alert("🤔 error modifying account " + ex.toString());
      // throw new Error("error with network!");
      dispatch(setData("error"));
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
  // getAccount,
  fetchData,
  createAccount,
  updateAccount,
  removeAccount,
  selectAccount,
  fetchLogin,
  setLoginRedirect,
  setLoginStatus
};
