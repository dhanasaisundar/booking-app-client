/* eslint-disable react/prop-types */
import styles from "./Reservation.module.css";

function RoomInfo({ roomInfo, handleSelectedRooms, isAvailable }) {
  return (
    <div className={styles.RoomInfoContainer}>
      <div className={styles.roomInfo}>
        <h2>{roomInfo.title}</h2>
        <p>{roomInfo.desc}</p>
        <span>
          Max People:<b>{roomInfo.maxPeople}</b>
        </span>
        <p>
          Price: <b>{roomInfo.price}</b>
        </p>
      </div>
      <div className={styles.checkboxContainer}>
        {roomInfo?.roomNumbers?.map((room) => (
          <div className={styles.checkbox} key={room._id}>
            <label>{room.number}</label>
            <input
              type="checkbox"
              value={room._id}
              disabled={!isAvailable(room)}
              onChange={(e) => handleSelectedRooms(e)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomInfo;
