import styles from "./Register.module.css";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { useState } from "react";
import { usePostAuthDataMutation } from "../redux/auth";
import { useNavigate } from "react-router";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const navigate = useNavigate();

  const [addUser, { data }] = usePostAuthDataMutation();
  console.log(password, confirmPw);

  function handleSubmitForm(e) {
    e.preventDefault();
    addUser({ username: username, password: password });
    console.log(data);
    navigate("/login");
  }

  return (
    <>
      <Search />
      <Navbar />
      <section className={styles.formContainer}>
        <h3>Register</h3>
        <form onSubmit={(e) => handleSubmitForm(e)}>
          <div className={styles.listEl}>
            <label for="username">Username: </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.listEl}>
            <label for="password">Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.listEl}>
            <label for="comfirmPassword">Confirm Password: </label>
            <input
              type="password"
              name="comfirmPassword"
              placeholder="Confirm your password"
              id="comfirmPassword"
              onChange={(e) => setConfirmPw(e.target.value)}
            />
          </div>
          <button disabled={!password || !confirmPw || password !== confirmPw}>
            Login
          </button>
        </form>
      </section>
    </>
  );
}

export default Register;
