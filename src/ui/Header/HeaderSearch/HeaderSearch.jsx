import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import HeaderOptionsDate from "./HeaderOptionsDate";
import HeaderOptionsSearch from "./HeaderOptionsSearch";
import HeaderOptionsPersons from "./HeaderOptionsPersons";

import styles from "../Header.module.css";
import { SearchContext } from "../../../contexts/searchContext";

function HeaderSearch() {
  const { destination, dates, options, dispatch } = useContext(SearchContext);
  const [headerDestination, setHeaderDestination] = useState(destination);
  const [headerDates, setHeaderDates] = useState(dates);
  const [headerOptions, setHeaderOptions] = useState(options);

  const navigate = useNavigate();

  function handleHomeSearchBtn() {
    if (headerDestination === "") {
      toast.error("Please select the destination");
      return;
    }
    dispatch({
      type: "search/new",
      payload: {
        destination: headerDestination,
        dates: headerDates,
        options: headerOptions,
      },
    });
    navigate(`/hotel-search?destination=${headerDestination}`);
  }

  return (
    <div className={styles.searchContainer}>
      <HeaderOptionsSearch
        headerDestination={headerDestination}
        setHeaderDestination={setHeaderDestination}
      />
      <HeaderOptionsDate
        headerDates={headerDates}
        setHeaderDates={setHeaderDates}
      />
      <HeaderOptionsPersons
        headerOptions={headerOptions}
        setHeaderOptions={setHeaderOptions}
      />
      <div>
        <button className={styles.searchBtn} onClick={handleHomeSearchBtn}>
          search
        </button>
      </div>
    </div>
  );
}

export default HeaderSearch;

/*
 const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  
  const [openOptions, setOpenOptions] = useState(false);
  

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);


  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };


*/
