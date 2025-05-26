import Navbar from "../components/Navbar";
import Search from "../components/Search";
import styles from "./SearchPage.module.css";
import TrackCard from "../components/TrackCard";
import { useGetSearchListQuery } from "../redux/searchApi";
import { useSelector } from "react-redux";

function SearchPage() {
  const songName = useSelector((state) => state.search.search);
  const favouriteList = useSelector((state) => state.token.favouriteList);
  const { data, isLoading } = useGetSearchListQuery(songName, {
    skip: !songName,
  });
  const searchList = data?.results || [];

  console.log(data);
  return (
    <>
      <Search />
      <Navbar />
      <section id="favourite" className={styles.container}>
        {!isLoading &&
          searchList &&
          searchList.map((track) => (
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
        {data && !searchList.length && <h3>No result</h3>}
        {!data && <h3>Start your search!</h3>}
      </section>
    </>
  );
}
export default SearchPage;
