/* eslint-disable react/prop-types */
import { useContext } from "react";
import { SearchContext } from "../../contexts/searchContext";
import styles from "./HotelUi.module.css";

function HotelCompoent002({ hotel, setShowReservation }) {
  const { destination, dates, options } = useContext(SearchContext);
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  function dayDifference(date1, date2) {
    if (!date1 || !date2) return 0;
    const parsedDate1 = new Date(date1);
    const parsedDate2 = new Date(date2);
    const timeDiff = Math.abs(parsedDate2?.getTime() - parsedDate1?.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate);

  return (
    <div className={styles.hotelContainer002}>
      <div className={styles.hotelDetailsTexts}>
        <h1 className={styles.hotelTitle}>Stay in the heart of City</h1>
        <p className={styles.hotelDesc}>
          Located a 5-minute walk from St. Florians Gate in Krakow, Tower Street
          Apartments has accommodations with air conditioning and free WiFi. The
          units come with hardwood floors and feature a fully equipped
          kitchenette with a microwave, a flat-screen TV, and a private bathroom
          with shower and a hairdryer. A fridge is also offered, as well as an
          electric tea pot and a coffee machine. Popular points of interest near
          the apartment include Cloth Hall, Main Market Square and Town Hall
          Tower. The nearest airport is John Paul II International
          Kraków–Balice, 16.1 km from Tower Street Apartments, and the property
          offers a paid airport shuttle service.
        </p>
      </div>
      <div className={styles.hotelDetailsPrice}>
        <h1>Perfect for a 9-night stay!</h1>
        <span>
          Located in the real heart of {destination}, this property has an
          excellent location score of 9.8!
        </span>
        <h2>
          <b> &#8377; {days * hotel?.cheapestPrice * options?.rooms}</b> ({days}
          nights)
        </h2>
        <button
          className={styles.bookNow}
          onClick={() => setShowReservation(true)}
        >
          Reserve or Book Now!
        </button>
      </div>
    </div>
  );
}

export default HotelCompoent002;
