/* eslint-disable react/prop-types */
import styles from "./Profile.module.css";

function InfoName({ infoName }) {
  return (
    <div className={styles.infoName}>
      <span>{infoName}</span>
    </div>
  );
}

export default InfoName;
