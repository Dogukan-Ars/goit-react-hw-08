import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Home.module.css";

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.hero}>
      <h1>Welcome to Phonebook</h1>
      <p>Your secure and modern contact management app</p>

      {!isLoggedIn ? (
        <div className={css.buttons}>
          <NavLink to="/register" className={css.btnPrimary}>
            Get Started
          </NavLink>
          <NavLink to="/login" className={css.btnSecondary}>
            Login
          </NavLink>
        </div>
      ) : (
        <NavLink to="/contacts" className={css.btnPrimary}>
          Go to My Contacts →
        </NavLink>
      )}

      <div className={css.features}>
        <div className={css.feature}>
          <h3>🔒 Secure Authentication</h3>
          <p>Keep your contacts safe with our robust security measures.</p>
        </div>
        <div className={css.feature}>
          <h3>📱 Contact Management</h3>
          <p>Easily organize and manage all your contacts in one place.</p>
        </div>
        <div className={css.feature}>
          <h3>🔍 Smart Search</h3>
          <p>
            Find contacts quickly with our intelligent search functionality.
          </p>
        </div>
      </div>
    </div>
  );
}
