import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

function Login() {
  const { loginUser, googleLogin, setUser } = useContext(AuthContext);

  //   login
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password);
  };

  //   google login
  const handelGoogleLogin = () => {
    googleLogin().then((result) => setUser(result.user));
  };
  return (
    <>
      <div className="hero">
        <div className="shadow-2xl rounded-2xl bg-base-100 lg:w-[40%]">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="text-center space-x-5 mt-7">
              <button onClick={handelGoogleLogin} className="btn  btn-primary">
                Google
              </button>
              <button className="btn  btn-primary">Github</button>
            </div>
            <p className="text-xl text-center font-semibold mt-4">
              New Here?{" "}
              <Link to={"/register"} className="text-rose-400">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
