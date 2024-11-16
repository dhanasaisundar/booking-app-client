/* eslint-disable react/prop-types */
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { photos } from "../../../data/data";
import styles from "./HotelUi.module.css";

function HotelModal({ slideNumber, setShowModal, handleArrowClick }) {
  return (
    <div className={styles.modalContainer}>
      <FaArrowLeft
        className={styles.modalLeftArrow}
        onClick={() => handleArrowClick("l")}
      />
      <IoMdClose
        className={styles.modalClose}
        onClick={() => setShowModal(false)}
      />
      <div className={styles.modalImageContainer}>
        <img
          src={photos[slideNumber].src}
          alt={`${slideNumber}`}
          className={styles.modalImage}
        />
      </div>
      <FaArrowRight
        className={styles.modalRightArrow}
        onClick={() => handleArrowClick("r")}
      />
    </div>
  );
}

export default HotelModal;
