/* eslint-disable react/prop-types */
import styles from "./HotelUi.module.css";
import { photos } from "../../../data/data";

function HotelImage({ handleImageClick }) {
  return (
    <div className={styles.hotelImagesCon001}>
      {photos.map((image, index) => {
        return (
          <div
            key={index}
            className={styles.hotelImagesCon002}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image.src}
              alt={`${index}`}
              className={styles.hotelImage}
            />
          </div>
        );
      })}
    </div>
  );
}

export default HotelImage;
