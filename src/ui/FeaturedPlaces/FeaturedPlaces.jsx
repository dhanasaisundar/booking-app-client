import Loader from "../Loader/Loader";
import { featuredPlacesUrl } from "../../utils/url.js";
import useFetch from "../../hooks/useFetch";
import styles from "./FeaturedPlaces.module.css";
import { Link } from "react-router-dom";

const imagesInfo = [
  "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
  "https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
  "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
  "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
];

function FeaturedPlaces() {
  const { data, isLoading, error } = useFetch(featuredPlacesUrl);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

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
            <h3 className={styles.propHeading}>Featured Properties</h3>
            <div className={styles.propConItem}>
              {data?.hotels?.map((type, index) => {
                return (
                  <Link
                    to={`/hotel-search?features=true`}
                    key={type._id}
                    className={styles.link}
                  >
                    <div className={styles.prop}>
                      <img
                        src={imagesInfo[index]}
                        alt={type.type}
                        className={styles.propImage}
                      />
                      <div className={styles.info}>
                        <h5>{type.name}</h5>
                        <p>{type.city}</p>
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

export default FeaturedPlaces;
