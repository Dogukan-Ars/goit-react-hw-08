import toast from "react-hot-toast";
import css from "./DeleteConfirmModal.module.css";

export default function DeleteConfirmModal({ contact, onConfirm, onCancel }) {
  const handleConfirm = () => {
    onConfirm(contact.id);
  };

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <h3>Delete Contact</h3>
        <p>
          Are you sure you want to delete <strong>{contact.name}</strong>?
        </p>
        <p className={css.number}>{contact.number}</p>

        <div className={css.buttons}>
          <button className={css.cancelBtn} onClick={onCancel}>
            Cancel
          </button>
          <button className={css.deleteBtn} onClick={handleConfirm}>
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}
