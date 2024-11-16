/* eslint-disable react/prop-types */
import styles from "./Profile.module.css";

function ControlButtons({ isEditable, setIsEditable, handleControlBtn }) {
  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleCancel = () => {
    handleControlBtn("cancel");
  };

  const handleSave = () => {
    handleControlBtn("save");
  };

  return (
    <div className={styles.editCon}>
      {!isEditable ? (
        <button
          disabled={isEditable}
          className={`${styles.cancelBtn} ${isEditable && styles.disabled}`}
          onClick={handleEdit}
        >
          Edit
        </button>
      ) : (
        <div className={styles.btnCon}>
          <button className={styles.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>
          <button className={styles.saveBtn} onClick={handleSave}>
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default ControlButtons;
