import { useContext } from "react";
import UserProfile from "./UserProfile";
import { AuthContext } from "../Provider/AuthProvider";

function UpdateProfile() {
  const { user } = useContext(AuthContext);
  console.log(user);
  // const [name, setName] = useState("");
  // const [photoURL, setPhotoURL] = useState("");
  const HandelUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <UserProfile />
      <p className="text-3xl my-6 text-center font-semibold">Update Profile</p>
      <div data-aos="fade-up" className="hero mt-10">
        <div className="shadow-2xl rounded-2xl bg-base-100  max-w-xl lg:w-[40%]">
          <form onSubmit={HandelUpdate} className="card-body">
            <div className="flex justify-between gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="Name"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="photoURL"
                  className="input input-bordered"
                  name="photoURL"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
