import { Link } from "react-router-dom";
import { propertyTypeUrl } from "../../utils/url.js";
import Loader from "../Loader/Loader";
import useFetch from "../../hooks/useFetch.js";
import styles from "./PropertyType.module.css";

function PropertyType() {
  const { data, isLoading, error } = useFetch(propertyTypeUrl);
  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }
  return (
    <div className={styles.propCon}>
      <div className={styles.proConOne}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h3 className={styles.propHeading}>Browse by property type</h3>
            <div className={styles.propConItem}>
              {data?.hotelByTypes?.map((type) => {
                return (
                  <Link
                    to={`/hotel-search?type=${type.type}`}
                    key={type._id}
                    className={styles.link}
                  >
                    <div className={styles.prop}>
                      <img
                        src={type.imageUrl}
                        alt={type.type}
                        className={styles.propImage}
                      />
                      <div className={styles.info}>
                        <h5>{type.type}</h5>
                        <p>{type.count} available</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PropertyType;
