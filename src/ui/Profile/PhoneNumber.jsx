/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import InfoName from "./InfoName";
import ControlButtons from "./ControlButtons";
import styles from "./Profile.module.css";

function PhoneNumber({ user, handleFieldUpdate }) {
  const [isEditable, setIsEditable] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "");
  const [error, setError] = useState(false);

  function handleControlBtn(controlType) {
    if (controlType === "cancel") {
      setIsEditable(false);
      setError(false);
      return;
    } else if (controlType === "save") {
      if (phoneNumber === "") {
        setError(true);
        return;
      }
      const field = "phoneNumber";
      const payload = phoneNumber;
      handleFieldUpdate(field, payload);
      setIsEditable(false);
      setError(false);
    }
  }

  return (
    <div className={styles.infoNameCon}>
      <InfoName infoName={"Phone Number"} />
      <div className={styles.infoPlaceHolder}>
        {!isEditable ? (
          <span>
            {phoneNumber === ""
              ? "Please Enter Your Phone Number"
              : phoneNumber}
          </span>
        ) : (
          <div className={styles.inputCon}>
            <label htmlFor="phoneNumber">
              Phone Number
              <FaAsterisk className={styles.asterick} />
            </label>
            <input
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {error && <p className={styles.error}>Please enter a value*</p>}
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

export default PhoneNumber;
