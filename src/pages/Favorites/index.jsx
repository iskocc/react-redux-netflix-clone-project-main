import { useDispatch, useSelector } from "react-redux";
import Loader from "./../../components/Loader";
import Error from "./../../components/Error";
import { baseImageUrl } from "./../../utils/constans";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdBookmarkRemove } from "react-icons/md";
import { toggleWatchList } from "../../redux/actions";

const WatchList = () => {
  const dispatch = useDispatch();
  const { favorite, isLoading, error } = useSelector(
    (store) => store.watchList
  );
  console.log(favorite);

  const handleDelete = (movie) => {
    dispatch(toggleWatchList(movie, false));
  };
  if (isLoading) return <Loader />;
  if (error) return <Error info={error} />;
  if (favorite.length === 0)
    return (
      <div className="z-10">
        <img className="w-full object-cover" src="/public/netflix.gif" />
      </div>
    );
  return (
    <div className="z-10">
      <h1 className="z-10 text-xl md:text-2xl font-semibold">İzleme Listesi</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 rounded-md my-10">
        {favorite.map((movie) => (
          <div className="relative">
            <button onClick={() => handleDelete(movie)}>
              <MdBookmarkRemove
                color="gray"
                className="absolute top-6 right-1 bg-black  text-3xl hover:text-4xl z-10"
              />
            </button>
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="drop-shadow-[0_0_80px_rgba(255,255,255,0.4)]"
            >
              <div className=" relative">
                <img
                  className="w-full rounded-md mx-auto"
                  src={baseImageUrl + movie.poster_path}
                  alt="poster"
                />
                <h1 className="absolute bottom-0 w-full bg-black bg-opacity-75 text-xl border-b pb-1 border-red-500 ">
                  {movie.title}
                </h1>
                <p className="text-sm absolute top-0 left-0 bg-red-500 p-1 ">
                  {movie.release_date.substring(0, 4)}
                </p>
                <p className="flex items-center text-sm gap-1 absolute top-0 left-10 bg-black bg-opacity-35 p-1">
                  {movie.vote_average.toFixed(1)}
                  <FaStar color="yellow" />
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
