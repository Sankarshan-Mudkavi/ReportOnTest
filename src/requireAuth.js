import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './redux/actions';



// export default function RequireAuth(nextState, replace ) {
//   if (!userExists()) {
//     replace({
//       pathname: '/ltr/login',
//       state: { nextPathname: nextState.location.pathname }
//     });
//   }
// }

@connect((state) => {
  return state
})
export default function RequireAuth(ComposedComponent) {

  return class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object,
    }



    componentWillMount() {
      var loginStatus = this.props.loginStatus || {}
      var isLoggedIn = loginStatus.isLoggedIn;
      var state = this.state || {};
      let userScreen = this;
      if (typeof(isLoggedIn) == 'undefined') {
        console.log("gona try to fetchData()");
        this.props.dispatch(actions.fetchData('accounts'))
        .then(()=>{
          console.log("checking login now form RequireAuth");
          userScreen.checkLogin();
        });
        return;
      } else {
        console.log("checking login now form RequireAuth else ");
        userScreen.checkLogin();  
      }
    }

    checkLogin(props) {
      var props = props || this.props;
      var loginStatus = props.loginStatus || {}
      var isLoggedIn = loginStatus.isLoggedIn;
      var state = this.state || {};
      var userScreen = this;
      if (isLoggedIn == false) {
        this.props.dispatch(actions.setLoginRedirect(this.props.location.pathname));
        console.log("pushing to loginScreen");
        if (state.isLoggedIn != isLoggedIn) {
          userScreen.setState({
            isLoggedIn
          });
        }
        this.context.router.push('/ltr/login');
      } else {

        if (state.isLoggedIn != isLoggedIn) {
          if (isLoggedIn == true ){
            userScreen.props.dispatch(actions.fetchData('accounts'))
            .then(() => {
              userScreen.setState({
                isLoggedIn
              });    
            });  
          } else {
            userScreen.setState({
              isLoggedIn
            });
          }
        }

      }


    }

    componentWillUpdate(nextProps) {
      if (nextProps.isLoggedIn != this.props.isLoggedIn) {
        this.checkLogin(nextProps);  
      }
    }



    render() {
      var state = this.state || {};
      if (state.isLoggedIn) {
        console.log("should see compposedComponent now");
        return <ComposedComponent {...this.props} />;
      }
      else {
        return null;
      }
    }
  }

}