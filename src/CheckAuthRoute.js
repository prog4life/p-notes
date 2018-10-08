import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { getLoginStatus } from 'state/selectors';

export const CheckAuthRoute = ({ isLoggedIn, ...rest }) => {
  console.log('rest from Route ', rest);

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn // TODO: || !routes.some(route => route.path === path) 
        ? null
        : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

CheckAuthRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: getLoginStatus(state),
});

export default connect(mapStateToProps)(CheckAuthRoute);