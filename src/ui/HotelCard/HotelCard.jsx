/* eslint-disable react/prop-types */
import { useContext } from "react";
import Button from "../Button/Button";
import styles from "./HotelCard.module.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import toast from "react-hot-toast";

function HotelCard({ item, isLoading, error }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  function handleAvalability(id) {
    if (!user) {
      toast.error("Please login to continue!");
      return;
    }
    navigate(`/hotel-details/${id}`);
  }

  return (
    <div className={styles.hotelCarCon}>
      <div className={styles.card}>
        <div className={styles.imageCon}>
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square240/507296061.webp?k=3c4bdd0998d64a7b75efd6b6c394fa1a3c91babcde0b666f2753f8b30f1bd0cf&o="
            alt="hotel"
            className={styles.hotelImage}
          />
        </div>
        <div className={styles.hotelInfo}>
          <div>
            <div className={styles.titleCon}>
              <h2 className={styles.title}>{item.name}</h2>
              <h4>{item.rating > 4.5 ? "Excellent" : "Good"}</h4>
              <p>{item.rating}</p>
            </div>
            <p className={styles.hotelInfo002}>{item.distance}m from center</p>
            <p className={styles.hotelInfo002}>{item.city}</p>
          </div>
          <div>
            <Button type="button" bgColor={"#008234"} textColor={"#fff"}>
              Gateway Deal
            </Button>
          </div>

          <div className={styles.hotelDetailsCon}>
            <div className={styles.hotelDetails}>
              <span className={styles.hotelDetails001}>
                Studio Apartment with Air Conditioning
              </span>
              <span>Entire studio • 1 bathroom • 21m² 1 full bed</span>
              <span className={styles.hotelDetails002}>Free cancellation</span>
              <span className={styles.infoText}>
                You can cancel later, so lock in this great price today!
              </span>
            </div>
            <div className={styles.price}>
              <p className={styles.price001}>&#8377;{item.cheapestPrice}</p>
              <p className={styles.infoText}>Includes taxes and fees</p>
              <Button
                type="button"
                bgColor={"#006ce4"}
                textColor={"#fff"}
                onClick={() => handleAvalability(item._id)}
              >
                See availability
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
