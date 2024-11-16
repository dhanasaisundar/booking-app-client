import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfoCon}>
        <ul className={styles.footerListCon}>
          <li>Support</li>
          <li>Coronavirus (COVID-19) FAQs</li>
          <li>Manage your trips</li>
          <li>Contact Customer Service</li>
          <li>Safety Resource Center</li>
        </ul>
        <ul className={styles.footerListCon}>
          <li>Discover</li>
          <li> Genius loyalty program</li>
          <li>Seasonal and holiday deals</li>
          <li>Travel articles</li>
          <li> Booking.com for Business</li>
          <li>Car rental</li>
          <li>Flight finder</li>
          <li>Restaurant reservations</li>
          <li>Booking.com for Travel Agents</li>
        </ul>
        <ul className={styles.footerListCon}>
          <li>Terms and settings</li>
          <li>Privacy & cookies</li>
          <li>Terms & conditions</li>
          <li>Grievance officer</li>
          <li>Modern Slavery Statement</li>
          <li>Human Rights Statement</li>
        </ul>
        <ul className={styles.footerListCon}>
          <li>Partners</li>
          <li>Extranet login</li>
          <li>Partner help</li>
          <li>List your property</li>
          <li>Become an affiliate</li>
        </ul>
      </div>
      <div className={styles.copyRightCon}>
        <div className={styles.cp1}>
          myBooking.com is part of myBooking Holdings Inc., the world leader in
          online travel and related services.
        </div>
        <div className={styles.cp1}>
          Copyright © 1996–2024 Booking.com™. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
