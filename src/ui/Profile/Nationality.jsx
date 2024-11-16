/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import { CountryDropdown } from "react-country-region-selector";
import InfoName from "./InfoName";
import ControlButtons from "./ControlButtons";
import styles from "./Profile.module.css";

function Nationality({ user, handleFieldUpdate }) {
  const [isEditable, setIsEditable] = useState(false);
  const [nationality, setNationality] = useState(user.nationality || "");
  const [error, setError] = useState(false);

  function handleControlBtn(controlType) {
    if (controlType === "cancel") {
      setIsEditable(false);
      setError(false);
      return;
    } else if (controlType === "save") {
      if (nationality === "") {
        setError(true);
        return;
      }
      const field = "nationality";
      const payload = nationality;
      handleFieldUpdate(field, payload);
      setIsEditable(false);
      setError(false);
    }
  }
  return (
    <div className={styles.infoNameCon}>
      <InfoName infoName={"Nationality"} />
      <div className={styles.infoPlaceHolder}>
        {!isEditable ? (
          <span>
            {nationality === ""
              ? "Select your country/region your are from"
              : nationality}
          </span>
        ) : (
          <div className={styles.inputCon}>
            <label htmlFor="nationality">
              Nationality
              <FaAsterisk className={styles.asterick} />
            </label>
            <CountryDropdown
              className={styles.countrySelect}
              id="nationality"
              value={nationality}
              onChange={(value) => setNationality(value)}
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

export default Nationality;
