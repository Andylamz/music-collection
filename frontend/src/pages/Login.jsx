import styles from "./Login.module.css";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { usePostLoginDataMutation } from "../redux/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/tokenSlice";
import { useNavigate } from "react-router";

function Login() {
  const [login] = usePostLoginDataMutation();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLogin(e) {
    e.preventDefault();
    const result = await login({ username, password });
    if ("error" in result) {
      return alert(result.error.data.msg);
    }
    const token = result.data.data;
    dispatch(setToken(token));
    setPassword("");
    setUsername("");
    navigate("/favourite");
  }
  return (
    <>
      <Search />
      <Navbar />
      <section className={styles.formContainer}>
        <h3>Login</h3>

        <form onSubmit={(e) => handleLogin(e)}>
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
          <button disabled={!username || !password}>Login</button>
        </form>
      </section>
    </>
  );
}

export default Login;
