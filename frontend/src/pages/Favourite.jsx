import Navbar from "../components/Navbar";
import Search from "../components/Search";
import styles from "./Favourite.module.css";
import TrackCard from "../components/TrackCard";
import { useGetFavouriteListMutation } from "../redux/dashboardApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { setFavouriteList } from "../redux/tokenSlice";

function Favourite() {
  const [loadData, { data }] = useGetFavouriteListMutation();
  const favouriteList = data?.data;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    if (!token) {
      navigate("/error");
    }
    loadData();
  }, [navigate, token, loadData]);

  useEffect(() => {
    dispatch(setFavouriteList(data?.data));
  }, [dispatch, data]);
  return (
    <>
      <Search />
      <Navbar />
      <section id="favourite" className={styles.container}>
        {favouriteList &&
          favouriteList.map((track) => (
            <TrackCard
              key={track.trackId}
              name={track.title}
              artist={track["name"]}
              image={track.image}
              trackId={track.trackId}
              isFavourited={favouriteList.some(
                (list) => list.trackId === track.trackId
              )}
            />
          ))}
      </section>
    </>
  );
}

export default Favourite;
