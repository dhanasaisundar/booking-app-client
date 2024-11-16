/* eslint-disable react/prop-types */
// import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import styles from "../Header.module.css";
// import { SearchContext } from "../../../contexts/searchContext";

function HeaderOptionItem({ type, options, setOptions }) {
  function handleAddOperation() {
    setOptions((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  }

  function handleMinusOperation() {
    if (options[type] > 0) {
      setOptions((prevState) => ({
        ...prevState,
        [type]: prevState[type] - 1,
      }));
    }
  }

  return (
    <div className={styles.optionItem}>
      <span>{type}</span>
      <div className={styles.counterCon}>
        <button onClick={handleMinusOperation}>
          <FaMinus />
        </button>
        <span>{options[type]}</span>
        <button onClick={handleAddOperation}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default HeaderOptionItem;

// setOptions((prevState) => ({
//   ...prevState,
//   [type]: prevState[type] + 1,
// }));

// if (options[type] > 0) {
//   setOptions((prevState) => ({
//     ...prevState,
//     [type]: prevState[type] - 1,
//   }));
// }

/*
  dispatch({
      type: "search/operationInc",
      payload: {
        type,
      },
    });

    dispatch({
      type: "search/operationDec",
      payload: {
        type,
      },
    });
*/
