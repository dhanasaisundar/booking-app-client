import { Link } from "react-router-dom";
import { useContext } from "react";
import Loader from "../Loader/Loader";
import useFetch from "../../hooks/useFetch";
import { trendingHotelsUrl } from "../../utils/url.js";
import { SearchContext } from "../../contexts/searchContext.jsx";
import styles from "./TrendingDestination.module.css";

function TrendingDestination() {
  const { data, isLoading, error } = useFetch(trendingHotelsUrl);
  const { dispatch } = useContext(SearchContext);

  function handleImageClick(place) {
    dispatch({ type: "search/new", payload: { destination: place } });
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div className={styles.destination}>
      <div className={styles.destinationCon}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h3 className={styles.heading}>Popular Destination</h3>
            <div className={styles.destinationItemsCon}>
              {data?.trendingPlaces?.map((info) => (
                <Link
                  to={`/hotel-search?destination=${info.placeName}`}
                  key={info._id}
                  onClick={() => handleImageClick(info.placeName)}
                >
                  <div className={styles.destinationItem}>
                    <img
                      src={info.imageUrl}
                      alt={info.placeName}
                      className={styles.featuredImage}
                    />
                    <div className={styles.placeInfo}>
                      <h1>{info.placeName}</h1>
                      <p>{info.placeDescription}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TrendingDestination;
