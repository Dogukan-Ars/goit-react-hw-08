import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const credentials = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim().toLowerCase(),
      password: form.elements.password.value,
    };

    if (credentials.password.length < 7) {
      alert("Password must be at least 7 characters long!");
      return;
    }

    dispatch(register(credentials));
    form.reset();
  };

  return (
    <div className={css.wrapper}>
      <h2>Register</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="password"
          name="password"
          placeholder="Password (min 7 characters)"
          minLength="7"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
