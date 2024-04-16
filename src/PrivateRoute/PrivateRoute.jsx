import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

function PrivateRoute({ children }) {
  console.log(children);
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <HashLoader size={150} color="#36d7b7" />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
}

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
