import { useState } from "react";
import { useLocation } from "react-router-dom";

import HotelImage from "./HotelImage";
import HotelModal from "./HotelModal";
import HotelComponent001 from "./HotelComponent001";
import HotelCompoent002 from "./HotelCompoent002";

import { photos } from "../../../data/data";
import { hotelUrl } from "../../utils/url";

import useFetch from "../../hooks/useFetch.js";
import styles from "./HotelUi.module.css";
import Reservation from "../Reservation/Reservation.jsx";

function HotelUi() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const location = useLocation();
  const hotelId = location.pathname.split("/")[2];
  const fetchUrl = hotelUrl + `/${hotelId}`;
  const { data, isLoading, error } = useFetch(fetchUrl);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  function handleImageClick(index) {
    setShowModal(true);
    setSlideNumber(index);
  }

  function handleArrowClick(direction) {
    if (direction === "l") {
      slideNumber === 0
        ? setSlideNumber(photos.length - 1)
        : setSlideNumber((prevSlide) => prevSlide - 1);
    } else {
      slideNumber === photos.length - 1
        ? setSlideNumber(0)
        : setSlideNumber((prevSlide) => prevSlide + 1);
    }
  }

  return (
    <div className={styles.hotelContainer}>
      {showModal && (
        <HotelModal
          slideNumber={slideNumber}
          setShowModal={setShowModal}
          handleArrowClick={handleArrowClick}
        />
      )}
      <div className={styles.hotelContainer01}>
        <HotelComponent001
          hotel={data?.hotel}
          slideNumber={slideNumber}
          setSlideNumber={setSlideNumber}
          setShowReservation={setShowReservation}
        />

        <HotelImage handleImageClick={handleImageClick} />
        <HotelCompoent002
          hotel={data?.hotel}
          setShowReservation={setShowReservation}
        />
      </div>
      {showReservation && (
        <Reservation
          hotelId={hotelId}
          setShowReservation={setShowReservation}
        />
      )}
    </div>
  );
}

export default HotelUi;
