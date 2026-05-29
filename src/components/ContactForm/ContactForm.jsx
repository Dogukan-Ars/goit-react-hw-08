import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import toast from "react-hot-toast";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    // Aynı numara kontrolü
    const isDuplicateNumber = contacts.some(
      (contact) => contact.number === number,
    );

    if (isDuplicateNumber) {
      toast.error("This phone number already exists!");
      return;
    }

    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully!");
        form.reset();
      })
      .catch((error) => {
        toast.error("Failed to add contact");
      });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Full Name" required />
      <input type="tel" name="number" placeholder="Phone Number" required />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Contact"}
      </button>
    </form>
  );
}
