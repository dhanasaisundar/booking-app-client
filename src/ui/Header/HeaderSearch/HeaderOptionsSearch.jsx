/* eslint-disable react/prop-types */
import { LuBedSingle } from "react-icons/lu";
import styles from "../Header.module.css";

function HeaderOptionsSearch({ headerDestination, setHeaderDestination }) {
  return (
    <div className={styles.searchItem}>
      <LuBedSingle className={styles.searchConIcon} />
      <div className={styles.searchInputCon}>
        <input
          type="text"
          placeholder="Where are you going?"
          className={styles.searchInput}
          value={headerDestination}
          onChange={(e) => setHeaderDestination(e.target.value)}
        />
      </div>
    </div>
  );
}

export default HeaderOptionsSearch;
