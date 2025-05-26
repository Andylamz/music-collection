import { useDispatch } from "react-redux";
import styles from "./Search.module.css";
import { getQueryString } from "../redux/searchSlice";
import { useRef } from "react";

function Search() {
  const searchRef = useRef();
  const dispatch = useDispatch();
  function handleSearch() {
    console.log(searchRef.current.value);
    dispatch(getQueryString(searchRef.current.value));
  }

  return (
    <section className="search">
      <div className={styles.searchContainer}>
        <input type="text" className={styles.search} ref={searchRef} />
        <button className={styles.button} onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </section>
  );
}

export default Search;
