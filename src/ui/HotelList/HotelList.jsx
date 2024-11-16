import { useLocation } from "react-router-dom";
import HotelCard from "../HotelCard/HotelCard";
import SearchListInfo from "../SearchList/SearchListInfo";
import useFetch from "../../hooks/useFetch.js";
import { searchUrl } from "../../utils/url";
import styles from "./HotelList.module.css";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function HotelList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const destinationUrl = queryParams.get("destination");
  const typeUrl = queryParams.get("type");
  const featuresUrl = queryParams.get("features");
  const maxUrl = Number(queryParams.get("max")) || 20000;
  const minUrl = Number(queryParams.get("min")) || 0;

  const capitalizedDestination =
    destinationUrl && capitalizeFirstLetter(destinationUrl);

  console.log(typeof destinationUrl, typeUrl, featuresUrl);

  // Build the fetch URL conditionally
  let fetchUrl = searchUrl;
  if (destinationUrl) {
    fetchUrl += `?city=${capitalizedDestination}`;
  }
  if (typeUrl) {
    fetchUrl += `?type=${typeUrl}`;
  }
  if (featuresUrl) {
    fetchUrl += `?features=${featuresUrl}`;
  }

  fetchUrl += `&min=${minUrl}`;
  fetchUrl += `&max=${maxUrl}`;
  console.log(fetchUrl);
  const { data, isLoading, error } = useFetch(fetchUrl);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.hotelListCon}>
      <div className={styles.hotelListSubCon}>
        <SearchListInfo />
        <div>
          {data?.hotels?.length > 0 ? (
            data.hotels.map((item) => (
              <HotelCard
                item={item}
                isLoading={isLoading}
                error={error}
                key={item._id}
              />
            ))
          ) : (
            <div>No hotels found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HotelList;
