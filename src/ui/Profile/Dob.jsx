/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import InfoName from "./InfoName";
import ControlButtons from "./ControlButtons";
import styles from "./Profile.module.css";

function Dob({ user, handleFieldUpdate }) {
  const [isEditable, setIsEditable] = useState(false);
  const [dob, setDob] = useState(user.dob || "");
  const [error, setError] = useState(false);

  function handleControlBtn(controlType) {
    if (controlType === "cancel") {
      setIsEditable(false);
      setError(false);
      return;
    } else if (controlType === "save") {
      if (dob === "") {
        setError(true);
        return;
      }
      const field = "profile/dob";
      const payload = dob;
      handleFieldUpdate(field, payload);
      setIsEditable(false);
      setError(false);
    }
  }

  return (
    <div className={styles.infoNameCon}>
      <InfoName infoName={"Date of birth"} />
      <div className={styles.infoPlaceHolder}>
        {!isEditable ? (
          <span>{dob === "" ? "Let us know is your date of birth" : dob}</span>
        ) : (
          <div className={styles.inputCon}>
            <label htmlFor="dob">
              Date of birth
              <FaAsterisk className={styles.asterick} />
            </label>
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
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

export default Dob;
