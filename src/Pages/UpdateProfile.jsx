import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>vix-villa | update-profile</title>
      </Helmet>
      <div>
        <div
          data-aos="fade-down"
          className="flex flex-col justify-center max-w-xl mx-auto p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100"
        >
          <img
            src={user.photoURL}
            alt=""
            className="w-32 h-32 mx-auto rounded-full p-1 border-[3px] border-green-500"
          />
          <div className="space-y-4 text-center divide-y divide-gray-700">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl mt-5">
                {user.displayName}
              </h2>
              <p className="px-5 text-xs sm:text-base text-gray-400">
                Email : {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* update section */}

      <div data-aos="fade-up" className="hero mt-10">
        <div className="shadow-2xl rounded-2xl bg-base-100 w-full lg:w-[40%]">
          <form onSubmit={HandelUpdate} className="card-body">
            <div className="divider divider-accent text-3xl my-6 text-center font-semibold">
              Update Profile
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-6">
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
