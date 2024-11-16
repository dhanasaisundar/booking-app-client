/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import InfoName from "./InfoName";
import ControlButtons from "./ControlButtons";
import styles from "./Profile.module.css";

function Gender({ user, handleFieldUpdate }) {
  const [isEditable, setIsEditable] = useState(false);
  const [gender, setGender] = useState(user.gender || "");
  const [error, setError] = useState(false);

  function handleControlBtn(controlType) {
    if (controlType === "cancel") {
      setIsEditable(false);
      setError(false);
      return;
    } else if (controlType === "save") {
      if (gender === "") {
        setError(true);
        return;
      }
      const field = "gender";
      const payload = gender;
      handleFieldUpdate(field, payload);
      setIsEditable(false);
      setError(false);
    }
  }

  return (
    <div className={styles.infoNameCon}>
      <InfoName infoName={"Gender"} />
      <div className={styles.infoPlaceHolder}>
        {!isEditable ? (
          <span>{gender === "" ? "Select your gender" : gender}</span>
        ) : (
          <div className={styles.inputCon}>
            <label htmlFor="firstName">
              Gender
              <FaAsterisk className={styles.asterick} />
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">-- Select Gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
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

export default Gender;
