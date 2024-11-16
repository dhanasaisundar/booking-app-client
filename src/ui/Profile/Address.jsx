/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import InfoName from "./InfoName";
import ControlButtons from "./ControlButtons";
import styles from "./Profile.module.css";

function Address({ user, handleFieldUpdate }) {
  const [isEditable, setIsEditable] = useState(false);
  const [country, setCountry] = useState(user.address.country || "");
  const [countryState, setCountryState] = useState(
    user.address.countryState || ""
  );
  const [street, setStreet] = useState(user.address.street || "");
  const [city, setCity] = useState(user.address.city || "");
  const [postalCode, setPostalCode] = useState(user.address.postalCode || "");
  const [error, setError] = useState({
    countryError: false,
    streetError: false,
    cityError: false,
    countryStateError: false,
    postalCodeError: false,
  });

  function handleControlBtn(controlType) {
    if (controlType === "cancel") {
      setIsEditable(false);
      setError({
        countryError: false,
        streetError: false,
        cityError: false,
        countryStateError: false,
        postalCodeError: false,
      });
      return;
    } else if (controlType === "save") {
      let hasError = false;

      const newErrors = {
        countryError: country === "",
        streetError: street === "",
        cityError: city === "",
        countryStateError: countryState === "",
        postalCodeError: postalCode === "",
      };

      setError(newErrors);

      for (let key in newErrors) {
        if (newErrors[key]) {
          hasError = true;
        }
      }

      if (hasError) return;
      const feild = "address";
      const payload = { street, city, countryState, country, postalCode };
      handleFieldUpdate(feild, payload);
      setIsEditable(false);
      setError({
        countryError: false,
        addressError: false,
        cityError: false,
        countryStateError: false,
        postalCodeError: false,
      });
    }
  }
  return (
    <div className={styles.infoNameCon}>
      <InfoName infoName={"Address"} />
      <div className={styles.infoPlaceHolder}>
        {!isEditable ? (
          <span>{street === "" ? "Add your Address" : street + "..."}</span>
        ) : (
          <div>
            <div className={styles.inputCon}>
              <label htmlFor="country">
                Country/Region
                <FaAsterisk className={styles.asterick} />
              </label>
              <CountryDropdown
                id="country"
                value={country}
                className={styles.countrySelect}
                onChange={(val) => setCountry(val)}
              />
              <label htmlFor="cState">
                Country/Region
                <FaAsterisk className={styles.asterick} />
              </label>
              <RegionDropdown
                id="cState"
                country={country}
                value={countryState}
                className={styles.countrySelect}
                onChange={(val) => setCountryState(val)}
              />
              {error.countryStateError && (
                <p className={styles.error}>Please enter a value*</p>
              )}
              <div className={styles.inputCon}>
                <label htmlFor="street">
                  Door No/Street
                  <FaAsterisk className={styles.asterick} />
                </label>
                <input
                  id="street"
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
                {error.addressError && (
                  <p className={styles.error}>Please enter a value*</p>
                )}
              </div>
              <div className={styles.inputInfoCons}>
                <div className={styles.inputCon}>
                  <label htmlFor="city">
                    Town/city
                    <FaAsterisk className={styles.asterick} />
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  {error.townError && (
                    <p className={styles.error}>Please enter a value*</p>
                  )}
                </div>
                <div className={styles.inputCon}>
                  <label htmlFor="postalCode">
                    Zip Code
                    <FaAsterisk className={styles.asterick} />
                  </label>
                  <input
                    id="postalCode"
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                  {error.zipCodeError && (
                    <p className={styles.error}>Please enter a value*</p>
                  )}
                </div>
              </div>
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

export default Address;
