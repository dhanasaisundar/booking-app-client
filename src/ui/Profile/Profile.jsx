import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserInfo } from "../../utils/apiUser";
import { AuthContext } from "../../contexts/authContext";
import toast from "react-hot-toast";

import ProfileName from "./ProfileName";
import DisplayName from "./DisplayName";
import EmailAddress from "./EmailAddress";
import PhoneNumber from "./PhoneNumber";
import Dob from "./Dob";
import Nationality from "./Nationality";
import Gender from "./Gender";
import Address from "./Address";

import styles from "./Profile.module.css";

function Profile() {
  const { user, dispatch } = useContext(AuthContext);
  const [isEditable, setIsEditable] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/user/Login");
    }
  }, [navigate, user]);

  async function handleFieldUpdate(field, value) {
    try {
      dispatch({ type: "auth/success", payload: { ...user, [field]: value } });

      // Update in the backend
      await updateUserInfo(user.id, { [field]: value });
      toast.success("Saved Successfully!");
    } catch (error) {
      console.error("Error updating profile", error);
      toast.error("Error updating profile");
    }
  }

  return (
    <div className={styles.ProfileContainer}>
      <div className={styles.ProfileSubContainer}>
        <header className={styles.profileHeaderCon}>
          <div className={styles.header}>
            <h1>Personal Details</h1>
            <p>Update your info and find out how it is used</p>
          </div>
          <div>profile photo</div>
        </header>
        <main>
          <ProfileName
            user={user}
            handleFieldUpdate={handleFieldUpdate}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
          />
          <DisplayName
            user={user}
            handleFieldUpdate={handleFieldUpdate}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
          />
          <EmailAddress
            user={user}
            handleFieldUpdate={handleFieldUpdate}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
          />
          <PhoneNumber
            user={user}
            handleFieldUpdate={handleFieldUpdate}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
          />
          <Dob
            user={user}
            handleFieldUpdate={handleFieldUpdate}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
          />
          <Nationality
            user={user}
            handleFieldUpdate={handleFieldUpdate}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
          />
          <Gender
            user={user}
            handleFieldUpdate={handleFieldUpdate}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
          />
          <Address
            user={user}
            handleFieldUpdate={handleFieldUpdate}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
          />
        </main>
      </div>
    </div>
  );
}

export default Profile;

// const initialState = {
//   userName: "",
//   displayName: "",
//   email: "",
//   phoneNumber: "",
//   dob: "",
//   nationality: "",
//   gender: "",
//   address: "",
//   isEditing: false,
// };

// function profileReducer(state, action) {
//   switch (action.type) {
//     case "profile/userName":
//       return { ...state, userName: action.payload };
//     case "profile/displayName":
//       return { ...state, displayName: action.payload };
//     case "profile/email":
//       return { ...state, email: action.payload };
//     case "profile/phoneNumber":
//       return { ...state, phoneNumber: action.payload };
//     case "profile/dob":
//       return { ...state, dob: action.payload };
//     case "profile/nationality":
//       return { ...state, nationality: action.payload };
//     case "profile/gender":
//       return { ...state, gender: action.payload };
//     case "profile/address":
//       return { ...state, address: action.payload };
//     case "profile/editing":
//       return { ...state, isEditing: action.payload };
//     default:
//       return state;
//   }
// }

// const [state, dispatch] = useReducer(profileReducer, initialState, () => {
//   const storedUser = localStorage.getItem("user");
//   return storedUser ? JSON.parse(storedUser) : initialState;
// });
