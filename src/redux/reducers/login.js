import {
  LOGIN,
  LOGIN_REG,
  LOGIN_ER,
  LOGOUT,
  LOGIN_REDIR
} from '../actions/actionTypes';
import cookie from 'react-cookie';


function loginStatus(state = [], action) {

    switch(action.type) {
        case LOGIN:
          if (action.resp) {
            var token = action.resp.token;
            if (token) {
              console.log("saving cookie! " + token);
              cookie.save('token', token, {path: '/'});

            }
          }
          return { 
              ...state, 
              isLoggedIn: true, 
              }
         
        case LOGOUT:
            console.log("reducer returning logged out");
            cookie.remove('token', {path:'/'});
            return {
              ...state,
              isLoggedIn:false,
            }
            
        case LOGIN_ER:
            return {
              ...state,
              isLoggedIn: false,
              loginError:true,
              loginAttempts: state.loginAttempts+1,
            }
        case LOGIN_REDIR:
          return {
            ...state,
            loginRedir: action.resp,
          }
        // case LOGIN_REG:
        // console.log("LOGINREDUCER RSESPONDING TO UPDATED LOGIN");
        //     return { 
        //         ...state, 
        //         isLoggedIn: true, 
        //         loginError:false, 
        //         loading:false, 
        //         loginAttempts: 0, 
        //         accountInfo1: action.resp.values1,
        //         accountInfo2: action.resp.values2,
        //         }
        //     break;
                   
        default:
            return state;
            break;
    }
}

module.exports = {
  loginStatus,
};
