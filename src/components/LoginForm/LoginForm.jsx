import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const credentials = {
      email: form.elements.email.value.trim(),
      password: form.elements.password.value,
    };

    dispatch(login(credentials));
    form.reset();
  };

  return (
    <div className={css.wrapper}>
      <h2>Login</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
