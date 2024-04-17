import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

function Login() {
  const [error, setError] = useState("");
  const location = useLocation();
  console.log(location);
  const { loginUser, googleLogin, setUser, githubLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // passToogle
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handelToogle = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  //   login
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      toast.error("You need to provide email and password");
      return;
    }

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        // navigate after login
        navigate(location?.state ? location.state : "/");
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
      navigate(location?.state ? location.state : "/");
      toast.success("Log in successfully");
    });
  };
  const handelGithubLogin = () => {
    githubLogin();
    navigate(location?.state ? location.state : "/");
    toast.success("Log in successfully");
  };
  return (
    <>
      <Helmet>
        <title>vix-villa | login</title>
      </Helmet>
      <div data-aos="fade-down" className="hero">
        <div className="shadow-2xl rounded-2xl bg-base-100 w-full md:w-[60%] lg:w-[40%] card-body">
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
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                placeholder="password"
                className="input input-bordered"
                onChange={handleChange}
              />
              {password && (
                <span
                  className="absolute top-[45%] right-[3%] "
                  onClick={handelToogle}
                >
                  {showPassword ? (
                    <FaRegEye size={20} />
                  ) : (
                    <FaRegEyeSlash size={20} />
                  )}
                </span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>

              {error && <p className="mt-2 text-rose-500">{error}</p>}
            </div>
            <div className="form-control">
              <button className="btn btn-primary mt-6">Login</button>
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
