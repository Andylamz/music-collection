// import { useState } from "react";
import { useState } from "react";
import {
  useAddFavouriteMutation,
  useRemoveFavouriteMutation,
} from "../redux/dashboardApi";
import styles from "./TrackCard.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function TrackCard({ name, artist, image, trackId, isFavourited }) {
  const [addFavourite] = useAddFavouriteMutation();
  const [removeFavourite] = useRemoveFavouriteMutation();
  const [isFavouritedHeart, setIsFavouritedHeart] = useState(isFavourited);
  const token = useSelector((state) => state.token.token);
  const navigate = useNavigate();

  function handleAddFavourite() {
    if (!token) {
      return navigate("/login");
    }
    addFavourite({
      trackId,
      image,
      title: name,
      name: artist,
    });
    setIsFavouritedHeart(true);
  }

  function handleRemoveFavourite() {
    if (!token) {
      return navigate("/login");
    }
    removeFavourite(trackId);
    setIsFavouritedHeart(false);
  }

  return (
    <div className={styles.card}>
      <div className={styles.picture}>
        <img src={image} alt={`Cover of ${name} by ${artist}`} />
        {!isFavouritedHeart && (
          <i className="fa-regular fa-heart" onClick={handleAddFavourite}></i>
        )}
        {isFavouritedHeart && (
          <i className="fa-solid fa-heart" onClick={handleRemoveFavourite}></i>
        )}
      </div>
      <div className={styles.description}>
        <h4>{name}</h4>
        <p>By {artist}</p>
      </div>
    </div>
  );
}

export default TrackCard;
