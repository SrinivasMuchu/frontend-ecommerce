import React, { useState } from "react";
import axios from "axios";
import "./LoginForms.css";
import { BASE_URL } from "../../constant.js";
import Topbar from "../TopBar/Topbar";
import LoginFormLeft from "./LoginFormLeft";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const verifyMember = async(token) => {
    try {
      const response = await axios.post(
        BASE_URL + "/customer/verify-member",
        {},
        {
          headers: {
            "x-auth-token": `${token}`,
          },
        }
      );
      
      if (response.data.meta.success) {
        Cookies.set("user_token", token);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleLogIn = async () => {
    try {
      const result = await axios.post(BASE_URL + "/customer/login", {
        email,
        password,
      });
      console.log(result.data.data.user_token);
      const token = result.data.data.user_token;
      if(token){
        verifyMember(token)
      }
      // Cookies.set("user_token", token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Topbar />
      <div className="login-form-page">
        <div className="login-form-div">
          <LoginFormLeft name="Login" />
          <div className="login-form-page-right">
            {/* <span className='login-head'>Login to your account</span> */}
            <div className="login-form-div-cont">
              <div className="login-form-input">
                <span>Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login-form-input">
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="login-save-btn">
                <button onClick={handleLogIn}>Login</button>
              </div>
            </div>
            {/* <div className='horizontal-line'></div> */}
            <div className="login-signup-btn">
              <div className="signup-btn">
                <span>New customer?</span>
                <button className="signup" onClick={() => nav("/signup")}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
