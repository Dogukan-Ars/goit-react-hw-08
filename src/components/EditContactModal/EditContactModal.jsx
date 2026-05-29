import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import css from "./EditContactModal.module.css";

export default function EditContactModal({ contact, onClose }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) {
      toast.error("Name and number cannot be empty");
      return;
    }

    dispatch(updateContact({ id: contact.id, name, number }))
      .unwrap()
      .then(() => {
        toast.success("Contact updated successfully!");
        onClose();
      })
      .catch(() => toast.error("Failed to update contact"));
  };

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <h3>Edit Contact</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
            required
          />
          <div className={css.buttons}>
            <button type="button" onClick={onClose} className={css.cancelBtn}>
              Cancel
            </button>
            <button type="submit" className={css.saveBtn}>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
