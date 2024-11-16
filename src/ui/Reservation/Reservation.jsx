/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import { roomUrl } from "../../utils/url";
import { roomResv } from "../../utils/roomResv";
import { SearchContext } from "../../contexts/searchContext";
import { storeInitialStateInLocalStorage } from "../../utils/initialState.js";
import useFetch from "../../hooks/useFetch";
import RoomInfo from "./RoomInfo";
import styles from "./Reservation.module.css";
import styles2 from "../HotelUi/HotelUi.module.css";

function Reservation({ hotelId, setShowReservation }) {
  const { dates } = useContext(SearchContext);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, isLoading, error } = useFetch(`${roomUrl}/${hotelId}`);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  function handleSelectedRooms(e) {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  }

  function getAllDates(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (isNaN(startDate) || isNaN(endDate) || startDate >= endDate) {
      toast.error("Invalid dates provided.");
      return [];
    }

    const allDates = [];
    let date = new Date(startDate);

    while (date <= endDate) {
      allDates.push(date.getTime());
      date.setDate(date.getDate() + 1);
    }

    return allDates;
  }

  const allDates = getAllDates(dates[0].startDate, dates[0].endDate);
  const isAvailable = (roomNumber) => {
    if (allDates.length === 0) return allDates === 0;
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  async function handleReserveBtn() {
    try {
      if (allDates.length === 0) {
        throw new Error("Please select the dates");
      }
      const data = await Promise.all(
        selectedRooms.map(async (roomId) => {
          const response = await roomResv(roomId, allDates);
          return response;
        })
      );

      const result = data.every((res) => res.ok === true);
      if (result) {
        toast.success("The rooms are booked!");
        storeInitialStateInLocalStorage();
      } else {
        toast.error("Error booking rooms. Please try again later!!");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setShowReservation(false);
    }
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.reserveContainer}>
        <header className={styles.header}>
          <h2>Select Your Rooms:</h2>
          <IoClose
            className={styles.closeBtn}
            onClick={() => setShowReservation(false)}
          />
        </header>
        <main>
          {data?.rooms?.map((room) => (
            <RoomInfo
              key={room._id}
              roomInfo={room}
              handleSelectedRooms={handleSelectedRooms}
              isAvailable={isAvailable}
            />
          ))}
        </main>
        <footer className={styles.footer}>
          <button className={styles2.bookNow} onClick={handleReserveBtn}>
            Reserve or Book Now!
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Reservation;
