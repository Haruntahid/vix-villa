// import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

function UserProfile() {
  const user = useContext(AuthContext);

  console.log(user);
  return (
    <>
      <h2>{user.user.reloadUserInfo.email}</h2>
    </>
  );
}

export default UserProfile;
