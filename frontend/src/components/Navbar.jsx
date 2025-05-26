import { Link, NavLink } from "react-router";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/auth";
import { logout } from "../redux/tokenSlice";
import { useState } from "react";

function Navbar() {
  const [isExpand, setIsExpand] = useState(false);
  const isLoggedIn = useSelector((state) => state.token.isLoggedIn);
  const dispatch = useDispatch();
  const [logoutApi] = useLogoutMutation();

  function handleLogout() {
    dispatch(logout());
    logoutApi();
  }

  function handleExpand() {
    setIsExpand((state) => !state);
  }
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <NavLink
            className={({ isActive }) =>
              `${styles.navEl} ${isActive ? styles.active : ""}`
            }
            to="/"
          >
            Popular
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${styles.navEl} ${isActive ? styles.active : ""}`
            }
            to="/Search"
          >
            Search
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${styles.navEl} ${isActive ? styles.active : ""}`
            }
            to="/favourite"
          >
            My favourite
          </NavLink>
        </div>

        <div className={styles.authContainer}>
          {!isLoggedIn && (
            <Link className={styles.authEl} to="/login">
              Login
            </Link>
          )}

          {isLoggedIn && (
            <Link className={styles.authEl} to="/" onClick={handleLogout}>
              Logout
            </Link>
          )}

          {!isLoggedIn && (
            <Link className={styles.authEl} to="/register">
              Register
            </Link>
          )}
        </div>
      </nav>

      <nav className={styles.dropdownNav} onClick={handleExpand}>
        <i className="fa-solid fa-square-caret-down"></i>
        <h3>Menu</h3>
        <ul
          className={
            isExpand
              ? `${styles.dropdownMenu}`
              : `${styles.dropdownMenu} ${styles.expand}`
          }
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                `${styles.navEl} ${isActive ? styles.active : ""}`
              }
              to="/"
            >
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${styles.navEl} ${isActive ? styles.active : ""}`
              }
              to="/Search"
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${styles.navEl} ${isActive ? styles.active : ""}`
              }
              to="/favourite"
            >
              My favourite
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <Link className={styles.authEl} to="/login">
                Login
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link className={styles.authEl} to="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link className={styles.authEl} to="/register">
                Register
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
