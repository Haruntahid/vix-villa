import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  console.log(children);
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
}

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
