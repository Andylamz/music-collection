import styles from "./LoginMessage.module.css";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { Link } from "react-router";

function LoginMessage() {
  return (
    <>
      <Search />
      <Navbar />
      <section className={styles.messageContainer}>
        <h3>Not logged in</h3>
        <p>
          Please <Link to="/login">login</Link>!
        </p>
      </section>
    </>
  );
}

export default LoginMessage;
