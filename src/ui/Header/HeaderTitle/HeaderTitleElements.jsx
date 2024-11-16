import styles from "../Header.module.css";

function HeaderTitleElements() {
  return (
    <div className={styles.headingTitleContainer}>
      <h1 className={styles.title}>Find your next stay</h1>
      <p className={styles.subTitle}>
        Search deals on hotels, homes, and much more...
      </p>
    </div>
  );
}

export default HeaderTitleElements;
