// import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

function UserProfile() {
  const { user } = useContext(AuthContext);

  console.log(user);
  return (
    <>
      <div className="flex flex-col justify-center max-w-xl mx-auto p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
        <img
          src={user.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user.displayName}
            </h2>
            <p className="px-5 text-xs sm:text-base text-gray-400">
              Email : {user.email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
