import React, { useEffect } from "react";
import myimage from "../utils/images/Logo.png";
import { USER_ICON } from "../utils/constants/constants.jsx";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import auth from "../utils/firebase.js";
import { addUser , removeUser} from "../utils/userSlice.js";

/**
 * Header component that renders the app header with logo,
 * user profile icon and sign out button if user is logged in.
 * Uses React hooks like useNavigate and useSelector.
 * Handles sign out logic with Firebase auth.
 */
const Header = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(()=>{ 
        onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUser ({
      uid:uid,
      email:email,
      displayName:displayName,
      photoURL:photoURL}));
      navigate("/browse");
    // ...
  } else {
    dispatch(removeUser());
    navigate("/");
    // User is signed out
    // ... 
  }
});
    },[]);
  return (
    <div className="absolute w-screen bg-gradient-to-b from-gray-950 flex justify-between">
      <img className=" mx-4 w-[400px] " src={myimage} alt="image2" />
      {user && (
        <div className="py-10 px-6">
          <img src={USER_ICON} className="w-16 h-16 rounded-lg" alt="img2" />
          <button
            onClick={handleSignOut}
            className="py-2  text-white font-bold hover:underline cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};


export default Header;
