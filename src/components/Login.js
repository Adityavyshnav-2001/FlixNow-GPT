import React from "react";
import Header from "./Header";
import { Banner_URL } from "../utils/constants/constants";

const Login = () => {
  return (
    <div className="bg-g">
      <Header />
      <div className="bg-gradient-to-b from-gray-900">
        <img className="mix-blend-overlay" src={Banner_URL} />
      </div>
    </div>
  );
};

export default Login;
