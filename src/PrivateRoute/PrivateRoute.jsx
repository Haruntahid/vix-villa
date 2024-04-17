import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <HashLoader size={150} color="#36d7b7" />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
