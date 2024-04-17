import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    logOut();
  };
  return (
    <>
      <div className="navbar bg-base-100 my-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/register"}>Register</NavLink>
              </li>
              <li>
                <NavLink to={"/connect"}>Connect us</NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink to={"/profile"}>Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/update-profile"}>Update Profile</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-3xl">
            vix-villa
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/register"}>Register</NavLink>
            </li>
            <li>
              <NavLink to={"/connect"}>Connect us</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to={"/profile"}>Profile</NavLink>
                </li>
                <li>
                  <NavLink to={"/update-profile"}>Update Profile</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {user ? (
          <div className="navbar-end">
            <div>
              <div className="mr-5">
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user.displayName}
                >
                  <img
                    className="w-14 h-14 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <Link onClick={handelLogout} className="btn">
              Logout
            </Link>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to={"/login"} className="btn">
              Login
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
