/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import ControlButtons from "./ControlButtons";
import InfoName from "./InfoName";
import styles from "./Profile.module.css";

function ProfileName({ user, handleFieldUpdate }) {
  const [isEditable, setIsEditable] = useState(false);
  const [firstName, setFirstName] = useState(user.userName.split()[0] || "");
  const [lastName, setLastName] = useState(user.userName.split()[1] || "");
  const [errorFirstName, setErrorFirstname] = useState(false);
  const [errorLastName, setErrorLastname] = useState(false);

  function handleControlBtn(controlType) {
    if (controlType === "cancel") {
      setIsEditable(false);
      setErrorFirstname(false);
      setErrorLastname(false);
      return;
    } else if (controlType === "save") {
      if (firstName === "") {
        setErrorFirstname(true);
        if (lastName === "") {
          setErrorLastname(true);
        }
        return;
      }
      const type = "profile/userName";
      const payload = firstName + " " + lastName;
      handleFieldUpdate(type, payload);
      setIsEditable(false);
      setErrorLastname(false);
    }
  }

  return (
    <div className={styles.infoNameCon}>
      <InfoName infoName={"Name"} />
      <div className={styles.infoPlaceHolder}>
        {!isEditable ? (
          <span>
            {firstName === "" ? "Let us know what to call you" : firstName}
          </span>
        ) : (
          <div className={styles.inputInfoCons}>
            <div className={styles.inputCon}>
              <label htmlFor="firstName">
                First Name
                <FaAsterisk className={styles.asterick} />
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errorFirstName && (
                <p className={styles.error}>Please enter a value*</p>
              )}
            </div>
            <div className={styles.inputCon}>
              <label htmlFor="lastName">
                Last Name
                <FaAsterisk className={styles.asterick} />
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errorLastName && (
                <p className={styles.error}>Please enter a value*</p>
              )}
            </div>
          </div>
        )}
      </div>
      <ControlButtons
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        handleControlBtn={handleControlBtn}
      />
    </div>
  );
}

export default ProfileName;
