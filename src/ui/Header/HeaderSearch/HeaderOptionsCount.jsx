/* eslint-disable react/prop-types */
import HeaderOptionItem from "./HeaderOptionItem";
import styles from "../Header.module.css";

function HeaderOptionsCount({ options, setOptions }) {
  return (
    <div className={styles.options}>
      <HeaderOptionItem
        type="adults"
        options={options}
        setOptions={setOptions}
      />
      <HeaderOptionItem
        type="children"
        options={options}
        setOptions={setOptions}
      />
      <HeaderOptionItem
        type="rooms"
        options={options}
        setOptions={setOptions}
      />
    </div>
  );
}

export default HeaderOptionsCount;

// import { useContext } from "react";
// import { SearchContext } from "../../../contexts/searchContext";
// const { options } = useContext(SearchContext);
// options={options}
// setOptions={setOptions}
// options={options}
// setOptions={setOptions}
// options={options}
// setOptions={setOptions}
