import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

function Login() {
  const [error, setError] = useState("");
  const { loginUser, googleLogin, setUser, githubLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();

  //   login
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
        toast.success("Log in successfully");
      })
      .catch((err) =>
        setError(
          err.message.replace(
            "Firebase: Error (auth/invalid-credential).",
            "Invalid Credential! Make Sure Your email and password is correct"
          )
        )
      );
  };

  //   google login
  const handelGoogleLogin = () => {
    googleLogin().then((result) => {
      setUser(result.user);
      navigate("/");
      toast.success("Log in successfully");
    });
  };
  const handelGithubLogin = () => {
    githubLogin();
    navigate("/");
    toast.success("Log in successfully");
  };
  return (
    <>
      <Helmet>
        <title>vix-villa | login</title>
      </Helmet>
      <div data-aos="fade-down" className="hero">
        <div className="shadow-2xl rounded-2xl bg-base-100 lg:w-[40%] card-body">
          <form onSubmit={handelLogin}>
            <h2 className="text-3xl font-bold text-center animate__animated animate__bounce text-rose-400">
              Login
            </h2>
            <div className="divider"></div>
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

              {error && <p className="mt-2 text-rose-500">{error}</p>}
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="divider divider-secondary">Login with social</div>
          <div className="text-center flex justify-center space-x-5">
            <button
              onClick={handelGoogleLogin}
              className="px-7 py-1 bg-[#4285F4] rounded-3xl text-white flex gap-2 items-center justify-center"
            >
              <FaGoogle size={18} />
              Google
            </button>
            <button
              onClick={handelGithubLogin}
              className="px-7 py-1 bg-[#2b3137] rounded-3xl text-white flex gap-2 items-center justify-center"
            >
              <FaGithub size={18} /> Github
            </button>
          </div>

          <p className="text-xl text-center font-semibold mt-4">
            New Here?{" "}
            <Link to={"/register"} className="text-rose-400">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
