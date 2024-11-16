/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import styles from "./HotelUi.module.css";

function HotelComponent001({ hotel, setShowReservation }) {
  return (
    <div className={styles.hotelContainer001}>
      <div className={styles.hotelContainer001a}>
        <h1>{hotel?.name}</h1>
        <div className={styles.hotelContainer001b}>
          <FaLocationDot />
          <span>{hotel?.address}</span>
        </div>
        <span className={styles.hotelDistance}>
          Excellent location – {hotel?.distance}m from center
        </span>
        <span className={styles.hotelPriceHighlight}>
          Book a stay over $114 at this property and get a free airport taxi
        </span>
      </div>
      <div>
        <button className={styles.bookNow} onClick={() => setShowReservation(true)}>
          Reserve or Book Now!
        </button>
      </div>
    </div>
  );
}

export default HotelComponent001;
