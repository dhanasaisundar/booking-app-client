import { FaBed, FaPlane, FaCar, FaTaxi } from "react-icons/fa";
import styles from "../Header.module.css";

const headerItems = [
  { icon: FaBed, label: "Stays" },
  { icon: FaPlane, label: "Flights" },
  { icon: FaCar, label: "Car rentals" },
  { icon: FaTaxi, label: "Airport taxis" },
];

function HeaderNavigationIcons() {
  return (
    <div className={styles.headerList}>
      {headerItems.map((item, index) => {
        <button
          key={index}
          type="button"
          className={styles.headerListItem}
          aria-label={item.label}
        >
          <item.icon className={styles.icon} />
          <span>{item.label}</span>
        </button>;
      })}
    </div>
  );
}

export default HeaderNavigationIcons;
