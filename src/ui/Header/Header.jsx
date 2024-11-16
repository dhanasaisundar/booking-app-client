import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderNavigationIcons from "./HeaderNavigation/HeaderNavigationIcons";
import HeaderTitleElements from "./HeaderTitle/HeaderTitleElements";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headingContainer}>
        <HeaderNavigationIcons />
        <HeaderTitleElements />
        <HeaderSearch />
      </div>
    </header>
  );
}

export default Header;
