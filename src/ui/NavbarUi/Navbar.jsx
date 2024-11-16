import { useContext } from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { FaRegUserCircle } from "react-icons/fa";
function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/">
          <h1 className={styles.logo}>myBooking.com</h1>
        </Link>
        {user !== null ? (
          <Link to="/user/account" className={styles.accountLink}>
            <div className={styles.profile}>
              <FaRegUserCircle className={styles.profileIcon} />
              <span>Your account</span>
            </div>
          </Link>
        ) : (
          <div className={styles.navItems}>
            <Link to="/user/register">
              <Button type="button" bgColor="#fff" textColor="#003b95">
                Register
              </Button>
            </Link>
            <Link to="/user/login">
              <Button type="button" bgColor="#fff" textColor="#003b95">
                Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
