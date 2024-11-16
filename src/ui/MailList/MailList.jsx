import styles from "./MailList.module.css";
function MailList() {
  return (
    <div className={styles.mailCon}>
      <h1 className={styles.mailHeading}>Save money, save time</h1>
      <p className={styles.mailInfo}>Sign up and well send best deals to you</p>
      <div className={styles.mailInput}>
        <input type="text" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default MailList;
