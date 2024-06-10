import React, { useState } from "react";
import { BASE_URL } from "../../constant.js";
import Cookies from "js-cookie";
import axios from "axios";
import "./MyProfile.css";
import Topbar from "../TopBar/Topbar";

function MyProfile() {
  // name,phone,email,gender, action
  const [gender, setGender] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [changePass, setChangepass] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handlePasswordClick = () => {
    setIsEditing(true);
    setChangepass(true);
  };
  const handleEditCancelClick = () => {
    setIsEditing(false);
    setChangepass(false);
  };

  
  const handleSaveClick = async () => {
    setIsEditing(false);
    try {
      const headers = {
        "x-auth-token": Cookies.get('user_token'),
      };
      const profileData = {
        name,
        phone,
        email,
        gender,
      };
      const editDetails = await axios.post(
        BASE_URL + "/customer/edit-details",
        {
          profileData, action: 'update'
        },
        { headers }
      );
      console.log(editDetails, "details");
    } catch (error) {
      console.log(error);
    }
    // alert('Profile details saved');
  };

  return (
    <>
      <Topbar />
      <div className="my-profile-div">
        <div className="my-profile-page">
          <div className="profile-card">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1518270500.1717545600&semt=ais_user"
              alt=""
              style={{ width: "75px", height: "75px", borderRadius: "50%" }}
            />
            <div className="profile-details">
              <span>Hello,</span>
              <span>{name}</span>
            </div>
          </div>
          <div className="profile-details-form">
            <div className="my-profile-edit">
              {!isEditing ? (
                <>
                  <button onClick={handleEditClick}>Edit details</button>
                  <button onClick={handlePasswordClick}>Change password</button>
                </>
              ) : (
                <button onClick={handleEditCancelClick}>Cancel</button>
              )}
            </div>
            {changePass ? (
              <>
                <div className="my-profile-inputs">
                  <span>Old password</span>
                  <input
                    type="password"
                    placeholder="Enter your old password"
                    // onChange={(e) => setName(e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="my-profile-inputs">
                  <span>New password</span>
                  <input
                    type="password"
                    placeholder="Enter your new password"
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="my-profile-inputs">
                  <span>Confirm password</span>
                  <input
                    type="password"
                    placeholder="Enter your confirm password"
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="my-profile-inputs">
                  <span>Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="my-profile-inputs">
                  <span>Phone number</span>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="my-profile-inputs">
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="my-profile-inputs">
                  <span>Gender</span>
                  <div className="my-profile-radio">
                    <input
                      type="radio"
                      value="male"
                      checked={gender === "male"}
                      onChange={handleGenderChange}
                      disabled={!isEditing}
                    />
                    <span>Male</span>
                  </div>
                  <div className="my-profile-radio">
                    <input
                      type="radio"
                      value="female"
                      checked={gender === "female"}
                      onChange={handleGenderChange}
                      disabled={!isEditing}
                    />
                    <span>Female</span>
                  </div>
                </div>
              </>
            )}

            <div className={isEditing ? "my-profile-save" : "hide-save-btn"}>
              <button onClick={handleSaveClick}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
