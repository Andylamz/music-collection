import { useDispatch } from "react-redux";
import styles from "./Search.module.css";
import { getQueryString } from "../redux/searchSlice";
import { useRef } from "react";
import { useNavigate } from "react-router";

function Search() {
  const navigate = useNavigate();
  const searchRef = useRef();
  const dispatch = useDispatch();
  function handleSearch() {
    dispatch(getQueryString(searchRef.current.value));
    navigate("/search");
  }
  function handlePressEnter(e) {
    if (e.code === "Enter") {
      handleSearch();
    }
  }
  return (
    <section className="search">
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.search}
          ref={searchRef}
          onKeyDown={(e) => handlePressEnter(e)}
        />
        <button
          className={styles.button}
          onClick={handleSearch}
          aria-label="search"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </section>
  );
}

export default Search;
