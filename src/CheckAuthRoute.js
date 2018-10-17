import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { getLoginStatus } from 'state/selectors';

export const CheckAuthRoute = ({ isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      console.log('isLoggedIn ', isLoggedIn);
      if (isLoggedIn) { // TODO: || !routes.some(route => route.path === path) 
        return null;
      }
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);

CheckAuthRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

// const mapStateToProps = (state) => {
//   console.log('state ', state);

//   return {
//     isLoggedIn: getLoginStatus(state),
//   };
// };

// export default connect(mapStateToProps)(CheckAuthRoute);
export default CheckAuthRoute;