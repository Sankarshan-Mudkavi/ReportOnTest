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
        console.log("gona try to fetchlogin()");
        this.props.dispatch(actions.fetchLogin())
        .then(()=>{
          userScreen.checkLogin();
        });
        return;
      }
      userScreen.checkLogin();

    }

    checkLogin(props) {
      var props = props || this.props;
      var loginStatus = props.loginStatus || {}
      var isLoggedIn = loginStatus.isLoggedIn;
      var state = this.state || {};
      if (!isLoggedIn) {
        this.props.dispatch(actions.setLoginRedirect(this.props.location.pathname));
        console.log("pushing to loginScreen");
        this.context.router.push('/ltr/login');
      }
      if (state.isLoggedIn != isLoggedIn) {
        this.setState({
          isLoggedIn
        });
      }
    }

    componentWillUpdate(nextProps) {
      this.checkLogin(nextProps);
    }



    render() {
      console.log("fuckery");
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