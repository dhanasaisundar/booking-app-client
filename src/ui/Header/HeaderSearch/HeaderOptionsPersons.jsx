/* eslint-disable react/prop-types */
// import { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

import HeaderOptionsCount from "./HeaderOptionsCount";
import styles from "../Header.module.css";
import { useState } from "react";
// import { SearchContext } from "../../../contexts/searchContext";

function HeaderOptionsPersons({ headerOptions, setHeaderOptions }) {
  // const { options } = useContext(SearchContext);
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <>
      <div className={styles.searchItem}>
        <IoPersonSharp className={styles.searchConIcon} />
        <span>
          {`${headerOptions.adults} adults, ${headerOptions.children} children, ${headerOptions.rooms} room`}
        </span>
        {openOptions === true ? (
          <FaAngleUp
            className={styles.searchConIcon}
            onClick={() => setOpenOptions(false)}
          />
        ) : (
          <FaAngleDown
            className={styles.searchConIcon}
            onClick={() => setOpenOptions(true)}
          />
        )}
        {openOptions && (
          <HeaderOptionsCount
            options={headerOptions}
            setOptions={setHeaderOptions}
          />
        )}
      </div>
    </>
  );
}

export default HeaderOptionsPersons;
