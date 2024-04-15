import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //   register a user
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login a user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout user
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state change", currentUser);
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    registerUser,
    loginUser,
    logOut,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
