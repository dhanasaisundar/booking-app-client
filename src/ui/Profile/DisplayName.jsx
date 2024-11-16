/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import InfoName from "./InfoName";
import ControlButtons from "./ControlButtons";
import styles from "./Profile.module.css";

function DisplayName({ user, handleFieldUpdate }) {
  const [isEditable, setIsEditable] = useState(false);
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [errorDisplayName, setErrorDisplayname] = useState(false);

  function handleControlBtn(controlType) {
    if (controlType === "cancel") {
      setIsEditable(false);
      setErrorDisplayname(false);
      return;
    } else if (controlType === "save") {
      if (displayName === "") {
        setErrorDisplayname(true);
        return;
      }
      const field = "profile/displayName";
      const payload = displayName;
      handleFieldUpdate(field, payload);
      setIsEditable(false);
      setErrorDisplayname(false);
    }
  }

  return (
    <div className={styles.infoNameCon}>
      <InfoName infoName={"display Name"} />
      <div className={styles.infoPlaceHolder}>
        {!isEditable ? (
          <span>
            {displayName === ""
              ? "Let us know what is your display name"
              : displayName}
          </span>
        ) : (
          <div className={styles.inputCon}>
            <label htmlFor="displayName">
              Display Name
              <FaAsterisk className={styles.asterick} />
            </label>
            <input
              id="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            {errorDisplayName && (
              <p className={styles.error}>Please enter a value*</p>
            )}
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

export default DisplayName;
