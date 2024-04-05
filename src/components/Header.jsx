import React, { useEffect } from "react";
import myimage from "../utils/images/Logo.png";
import { USER_ICON } from "../utils/constants/constants.jsx";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import auth from "../utils/firebase.js";
import { addUser , removeUser} from "../utils/userSlice.js"
import {GoogleGenerativeAI} from '@google/generative-ai';


// import dotenv from 'dotenv';
// import {GoogleGenerativeAI} from '@google/generative-ai';
// dotenv.config();
import { API_KEY } from "../utils/constants/constants.jsx";
/**
 * Header component that renders the app header with logo,
 * user profile icon and sign out button if user is logged in.
 * Uses React hooks like useNavigate and useSelector.
 * Handles sign out logic with Firebase auth.
 */

/**
 * Header component.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = () => {
  const genAI = new GoogleGenerativeAI(API_KEY);

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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
//unsubscribe when componenet unmounts
return ()=> unsubscribe();
    },[]);
    const myquery="Funny Indian Movies"
    const gptQuery =
"Act as a Movie Recommendation system and suggest some movies for the query : " + myquery +
".only give me names of 5 movies, comma seperated like the example result given ahead. Example:{Gadar,Sholay,Dhoom,Players,Blue}"

  const geminicall =async ()=> {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});


  const result = await model.generateContent(gptQuery);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  const gptMovies=text.split(",");
  console.log(gptMovies);
  // const obj = JSON.parse(text);
  // console.log(obj);
}


  return (
    <div className=" absolute w-screen bg-gradient-to-b from-black to flex justify-between">
      <img className=" mx-4 w-[350px] " src={myimage} alt="image2" />
      {user && (
        <div className="flex py-8 px-6">
          <img src={USER_ICON} className="w-16 h-16 rounded-lg cursor-pointer mr-2" alt="img2" />
          <button
              onClick={() => {
                handleSignOut();
              }}
              className="group flex items-center justify-evenly rounded-lg md:justify-start md:w-16 md:h-16 bg-red-600 md:rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg md:hover:w-32 w-[112px] h-9 hover:rounded-lg active:translate-x-1 active:translate-y-1"
            >
              <div className="flex items-center justify-center md:w-full md:transition-all md:duration-300 md:group-hover:justify-start md:group-hover:px-3">
                <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>
              <div className="md:absolute md:right-5 md:transform md:translate-x-full md:opacity-0 text-white text-lg md:font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Logout
              </div>
            </button>
            <button className="bg-white" onClick={geminicall}>hello</button>
        </div>
      )}
    </div>
  );
};


export default Header;
