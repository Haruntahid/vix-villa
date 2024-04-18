import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";
import "animate.css";
import { Helmet } from "react-helmet-async";
import { getAuth, updateProfile } from "firebase/auth";

function Register() {
  const { registerUser, setUser, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const auth = getAuth();

  // handel password toogle button
  const handelToogle = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  // update user
  // const updateUser = () => {
  //   updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photo,
  //   })
  //     .then(() => {
  //       setUser({ ...user, name, photo });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const handelRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!name || !email || !photo || !password) {
      toast.error("You must fill all the field");
      return;
    }

    // password validation
    if (password.length < 6) {
      setError("password must be 6 characters");
      return;
    }
    if (!/^(?=.*[A-Z]).+$/.test(password)) {
      setError("Password must contain at least one uppercase");
      return;
    }
    if (!/^(?=.*[a-z]).+$/.test(password)) {
      setError("Password must contain at least one lowercase");
      return;
    }

    setError("");
    // register a user
    registerUser(email, password)
      .then(() => {
        // update  user
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            e.target.reset();
            navigate("/");
            toast.success("Registration Successfully!");
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
            toast.error("Failed to update user profile");
          });
      })
      .catch((err) =>
        setError(
          err.message.replace(
            "Firebase: Error (auth/email-already-in-use).",
            "Email Aleready Exist!"
          )
        )
      );
  };

  return (
    <>
      <Helmet>
        <title>vix-villa | registration</title>
      </Helmet>
      <div data-aos="fade-down" className="hero">
        <div className="shadow-2xl rounded-2xl bg-base-100 w-full sm:w-[60%] lg:w-[40%]">
          <form onSubmit={handelRegister} className="card-body">
            <h2 className="text-3xl font-bold text-center animate__animated animate__bounce text-rose-400">
              Registration
            </h2>
            <div className="divider"></div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo"
                className="input input-bordered"
                onChange={(e) => setPhoto(e.target.value)}
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
                  className="absolute top-[60%] right-[3%] "
                  onClick={handelToogle}
                >
                  {showPassword ? (
                    <FaRegEye size={20} />
                  ) : (
                    <FaRegEyeSlash size={20} />
                  )}
                </span>
              )}
            </div>

            <div>
              {error && <span className="text-rose-600 mt-4">{error}</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p className="text-xl text-center font-semibold mt-4">
              New Here?{" "}
              <Link to={"/login"} className="text-rose-400">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
