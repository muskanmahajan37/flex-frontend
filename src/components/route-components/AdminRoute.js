import React from "react";

// Router
import { Route, Redirect } from "react-router-dom";

// Redux
import { connect } from "react-redux";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  role,
  ...rest
}) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated && role == 2 ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.user.role,
});

export default connect(mapStateToProps)(ProtectedRoute);
