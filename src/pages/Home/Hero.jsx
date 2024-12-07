import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { baseImageUrl } from "../../utils/constans";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { favorite } = useSelector((store) => store.watchList);
  const isFav = favorite.find((i) => i.id === movie?.id);

  useEffect(() => {
    api
      .get("/movie/popular")
      .then((res) =>
        //filmler dizisi
        {
          const movies = res.data.results;
          // dizinin uzunluğu kadar rastgele bir sayı seçme
          const i = Math.floor(Math.random() * movies.length);
          //filmler dizisinden rastgele 1 eleman seçtik
          setMovie(movies[i]);
        }
      )
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <Error info={error} />;
  if (!movie) return <Loader />;

  return (
    <div className="grid grdi-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold text-center z-10">{movie.title}</h1>
        <p className="text-start text-gray-300 z-10">{movie.overview}</p>
        <p className="z-10">
          <span>IMDB</span>
          <span className="text-yellow-400 ms-2 font-semibold">
            {movie.vote_average.toFixed(1)}
          </span>
        </p>
        <div className="flex gap-5 z-10">
          <Link to={`/movie/${movie.id}`}>
            <button className="bg-red-600 px-3 py-[6px] hover:bg-red-500">
              Filmi İzle
            </button>
          </Link>

          <Button color="yellow" movie={movie} />
        </div>
      </div>

      <div>
        <img
          className="drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] my-4 object-contain rounded max-h-[300px]"
          src={baseImageUrl + movie.backdrop_path}
          alt="poster"
        />
      </div>
    </div>
  );
};

export default React.memo(Hero);
