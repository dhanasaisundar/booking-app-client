/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
function Button({ children, type, bgColor, textColor, onClick }) {
  return (
    <button
      className={styles.button}
      type={type}
      style={{
        color: textColor,
        backgroundColor: bgColor,
        marginRight: "0.5rem",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
