import Navbar from "../components/Navbar";
import Search from "../components/Search";
import TrackCard from "../components/TrackCard";
import styles from "./Home.module.css";

import { useGetPopularListQuery } from "../redux/popularApi";
import { useSelector } from "react-redux";

function Home() {
  const { data, isLoading } = useGetPopularListQuery();
  const favouriteList = useSelector((state) => state.token.favouriteList);
  const popularList = data?.results || [];

  return (
    <>
      <Search />
      <Navbar />
      <section id="popular" className={styles.container}>
        {!isLoading &&
          popularList.length !== 0 &&
          popularList.map((track) => (
            <TrackCard
              key={track.id}
              name={track.name}
              artist={track["artist_name"]}
              image={track.image}
              trackId={track.id}
              isFavourited={favouriteList?.some(
                (list) => list.trackId === track.id
              )}
            />
          ))}
        {isLoading && <h3>Loading...</h3>}
      </section>
    </>
  );
}

export default Home;
