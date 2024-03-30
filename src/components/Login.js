import React from "react";
import Header from "./Header";
import Banner from "../utils/Banner.png";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="mix-blend-overlay" src={Banner} alt="Logo" />
      </div>
      <form className="absolute w-3/12 p-8 bg-black my-52 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 w-full rounded-xl bg-gradient-to-r from-yellow-300 to-red-700 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-xl font-bold text-black px-5 py-2.5 text-center me-2 mb-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer font-style : italic"
          onClick={toggleSignIn}
        >
          {" "}
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
