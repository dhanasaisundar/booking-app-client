import { useContext, useState } from "react";
import Button from "../Button/Button";
import styles from "./SearchListInfo.module.css";
import { SearchContext } from "../../contexts/searchContext";
import { useNavigate } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function SearchListInfo() {
  const { destination, dates, minPrice, maxPrice, options, dispatch } =
    useContext(SearchContext);
  const [localDestination, setLocalDestination] = useState(destination);
  const [localDates, setLocalDates] = useState(dates);
  const [localMinPrice, setLocalMinPrice] = useState(minPrice);
  const [localMaxPrice, setLocalMaxPrice] = useState(maxPrice);
  const [localOptions, setLocalOptions] = useState(options);
  const navigate = useNavigate();

  async function handleSearchButton() {
    console.log(localDestination);
    const capDestiny = capitalizeFirstLetter(localDestination);
    dispatch({
      type: "search/new",
      payload: {
        destination: capDestiny,
        dates: localDates,
        minPrice: localMinPrice,
        maxPrice: localMaxPrice,
        options: localOptions,
      },
    });

    const url = `/hotel-search/?destination=${capDestiny}&min=${localMinPrice}&max=${localMaxPrice}`;
    navigate(url);
  }

  return (
    <div className={styles.searchCon}>
      <h1>Search</h1>
      <div className={styles.searchInput}>
        <label htmlFor="search">Destination</label>
        <input
          type="text"
          id="search"
          value={localDestination}
          onChange={(e) => setLocalDestination(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={localDates}
          onChange={(e) => setLocalDates(e.target.value)}
        />
      </div>

      <h2>Options</h2>
      <div className={styles.searchDetails}>
        <div className={styles.SearchParameters}>
          <span>Min price per night</span>
          <input
            type="number"
            value={localMinPrice}
            onChange={(e) => setLocalMinPrice(Number(e.target.value))}
          />
        </div>
        <div className={styles.SearchParameters}>
          <span>Max price per night</span>
          <input
            type="number"
            value={localMaxPrice}
            onChange={(e) => setLocalMaxPrice(Number(e.target.value))}
          />
        </div>
        <div className={styles.SearchParameters}>
          <span>Adults</span>
          <input
            type="number"
            value={localOptions?.adults}
            onChange={(e) =>
              setLocalOptions((prevOpt) => ({
                ...prevOpt,
                adults: Number(e.target.value),
              }))
            }
          />
        </div>
        <div className={styles.SearchParameters}>
          <span>Children</span>
          <input
            type="number"
            value={localOptions?.children}
            onChange={(e) =>
              setLocalOptions((prevOpt) => ({
                ...prevOpt,
                children: Number(e.target.value),
              }))
            }
          />
        </div>
        <div className={styles.SearchParameters}>
          <span>Rooms</span>
          <input
            type="number"
            value={localOptions?.rooms}
            onChange={(e) =>
              setLocalOptions((prevOpt) => ({
                ...prevOpt,
                rooms: Number(e.target.value),
              }))
            }
          />
        </div>
      </div>
      <div>
        <Button
          type="button"
          bgColor={"#5287f0"}
          textColor={"#fff"}
          onClick={handleSearchButton}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default SearchListInfo;
