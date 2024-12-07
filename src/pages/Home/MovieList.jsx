import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { baseImageUrl } from "../../utils/constans";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const params = {
      language: "tr",
      with_genres: genre.id,
    };
    api
      .get("discover/movie", { params })
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
    setIsLoading(false);
  }, []);
  if (isLoading) return <Loader />;
  if (error) return <Error msg={error} />;
  return (
    <div className="drop-shadow-[0_0_80px_rgba(255,255,255,0.4)]">
      <h1 className="text-3xl font-semibold my-6">{genre.name}</h1>
      <Splide
        options={{
          pagination: false,
          autoWidth: true,
          gap: "1rem",
        }}
      >
        {movies &&
          movies.map((movie, key) => (
            <SplideSlide key={key}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="max-w-[250px] cursor-pointer rounded hover:scale-[1.05] transition duration-700 "
                  src={baseImageUrl + movie.poster_path}
                  alt="Image 1"
                />
              </Link>
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
};

export default MovieList;
