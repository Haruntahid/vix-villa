import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
// import { getAuth } from "firebase/auth";

function Register() {
  const { registerUser } = useContext(AuthContext);
  //   const [validPass, setValidPass] = useState();

  const handelRegister = (e) => {
    e.preventDefault();
    // console.log("submitted");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (password.length >= 6) {
      console.log("password is more than 6 character");
    }
    // console.log(name, email, photo, password);
    registerUser(email, password)
      .then((result) => console.log(result.user))
      .then((err) => console.log(err));
  };

  //   const auth = getAuth();
  //   const user = auth.currentUser;

  //   console.log(user);

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
