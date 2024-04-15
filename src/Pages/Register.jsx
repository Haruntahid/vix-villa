import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
// import { getAuth } from "firebase/auth";

function Register() {
  const { registerUser, setUser } = useContext(AuthContext);
  //   const [validPass, setValidPass] = useState();
  const [error, setError] = useState("");

  const handelRegister = (e) => {
    e.preventDefault();
    // console.log("submitted");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

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
      .then((result) => setUser(result.user))
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
      <div className="hero">
        <div className="shadow-2xl rounded-2xl bg-base-100 lg:w-[40%]">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                required
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
                required
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
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
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
