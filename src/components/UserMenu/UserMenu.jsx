import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.menu}>
      <p className={css.welcome}>
        Welcome, <span>{user.name}</span>
      </p>
      <button className={css.logoutBtn} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
