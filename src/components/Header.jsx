import React from "react";
import myimage from "../utils/images/Logo.png";
import { USER_ICON } from "../utils/constants/constants.jsx";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user=useSelector((store)=>store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
  // Sign-out successful.
}).catch((error) => { 
  navigate("/error");
  // An error happened.
});
  };
  return (
    <div className="absolute w-screen bg-gradient-to-b from-gray-950 flex justify-between">
      <img className=" mx-4 w-[400px] " src={myimage} />
      {user && <div className="py-10 px-6">
        <img src={USER_ICON} className="w-16 h-16 rounded-lg"/>
        <button onClick={handleSignOut} className="py-2  text-white font-bold hover:underline cursor-pointer">Sign Out</button>
      </div>
}
    </div>
    
  );
};

export default Header;
