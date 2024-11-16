/* eslint-disable react/prop-types */
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { SlCalender } from "react-icons/sl";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styles from "../Header.module.css";

function HeaderOptionsDate({ headerDates, setHeaderDates }) {
  console.log(headerDates);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div className={styles.searchItem}>
      <SlCalender className={styles.searchConIcon} />
      <span onClick={() => setOpenDate((prevDate) => !prevDate)}>
        {`${format(headerDates[0]?.startDate, "MM/dd/yyyy")} 
        to ${format(headerDates[0]?.endDate, "MM/dd/yyyy")}`}
      </span>
      {openDate && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setHeaderDates([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={headerDates}
          className={styles.date}
        />
      )}
    </div>
  );
}

export default HeaderOptionsDate;
