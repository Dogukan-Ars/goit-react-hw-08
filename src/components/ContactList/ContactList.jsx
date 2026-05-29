import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import {
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import EditContactModal from "../EditContactModal/EditContactModal";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";
import toast from "react-hot-toast";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const [editingContact, setEditingContact] = useState(null);
  const [deletingContact, setDeletingContact] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success("Contact deleted successfully"))
      .catch(() => toast.error("Failed to delete contact"));
    setDeletingContact(null);
  };

  if (isLoading) {
    return <p className={css.message}>⏳ Loading contacts...</p>;
  }

  if (contacts.length === 0) {
    return <p className={css.message}>No contacts found.</p>;
  }

  return (
    <>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li key={contact.id} className={css.item}>
            <div className={css.info}>
              <strong>{contact.name}</strong>
              <span>{contact.number}</span>
            </div>
            <div className={css.actions}>
              <button
                className={css.editBtn}
                onClick={() => setEditingContact(contact)}
              >
                Edit
              </button>
              <button
                className={css.deleteBtn}
                onClick={() => setDeletingContact(contact)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modals */}
      {editingContact && (
        <EditContactModal
          contact={editingContact}
          onClose={() => setEditingContact(null)}
        />
      )}

      {deletingContact && (
        <DeleteConfirmModal
          contact={deletingContact}
          onConfirm={handleDelete}
          onCancel={() => setDeletingContact(null)}
        />
      )}
    </>
  );
}
