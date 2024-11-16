/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import InfoName from "./InfoName";
import ControlButtons from "./ControlButtons";
import styles from "./Profile.module.css";

function EmailAddress({ user, handleFieldUpdate }) {
  const [isEditable, setIsEditable] = useState(false);
  const [email, setEmail] = useState(user?.email || "");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user.email]);

  function handleControlBtn(controlType) {
    if (controlType === "cancel") {
      setIsEditable(false);
      setError(false);
      return;
    } else if (controlType === "save") {
      if (email === "") {
        setError(true);
        return;
      }
      const field = "email";
      const payload = email;
      handleFieldUpdate(field, payload);
      setIsEditable(false);
      setError(false);
    }
  }

  return (
    <div className={styles.infoNameCon}>
      <InfoName infoName={"Email Address"} />
      <div className={styles.infoPlaceHolder}>
        {!isEditable ? (
          <span>
            {email === "" ? "Please Enter Your Email Address" : email}
          </span>
        ) : (
          <div className={styles.inputCon}>
            <label htmlFor="email">
              Email Address
              <FaAsterisk className={styles.asterick} />
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default EmailAddress;
