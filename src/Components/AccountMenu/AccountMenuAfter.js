import React from "react";
import "./AccountMenu.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function AccountMenuAfter() {
  const nav = useNavigate();

  const logout = () => {
    Cookies.remove("user_token");

    nav("/login");
  };
  return (
    <div className="account-profile-div">
      <div className="account-page-profile" onClick={() => nav("/my-profile")}>
        <img
          src="https://cdn-icons-png.freepik.com/512/12616/12616413.png"
          alt="profile"
          style={{ width: "18px", height: "18px" }}
        />
        <span>My profile</span>
      </div>
      <div className="account-page-profile">
        <img
          src="https://cdn-icons-png.freepik.com/512/6517/6517850.png"
          alt="orders"
          style={{ width: "18px", height: "18px" }}
        />
        <span>Orders</span>
      </div>
      <div className="account-page-profile">
        <img
          src="https://cdn-icons-png.freepik.com/256/93/93627.png?uid=R116152838&ga=GA1.1.1462843302.1696500966&semt=ais_hybrid"
          alt="logout"
          style={{ width: "18px", height: "18px" }}
        />
        <button onClick={logout}>
          <span>Logout </span>
        </button>
      </div>
    </div>
  );
}

export default AccountMenuAfter;
