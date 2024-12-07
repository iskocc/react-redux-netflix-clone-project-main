import React from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
import Button from "../../components/Button";

const DetailMovie = () => {
  const { id } = useParams();
  const { movie } = useSelector((store) => store.movie);
  const { favorite } = useSelector((store) => store.watchList);
  const isFav = favorite.find((i) => i.id === movie.id);

  return (
    <div className="my-5 mx-5 max-md:mx-1">
      <div className="flex items-center justify-between gap-3 max-md:flex-col">
        <h1 className="font-semibold text-3xl max-md:text-xl">{movie.title}</h1>
        <div className="flex items-center gap-5">
          <p className="flex items-center gap-1 text-xl max-md:text-base">
            {movie.vote_average.toFixed(1)}
            <FaStar color="yellow" />
          </p>
          <Button color="yellow" movie={movie} />
        </div>
      </div>
      <div className="text-gray-500 text-sm mt-2 flex items-center gap-3 max-md:text-[10px] max-md:justify-center">
        <span>{movie.release_date.substring(0, 4)} |</span>
        <span>{movie.runtime}dk. |</span>
        <span>Orj. {movie.original_title}</span>
      </div>
      <div className="flex items-center text-gray-400 mt-10 gap-10 whitespace-nowrap max-md:text-[10px] max-md:gap-3  max-md:items-start">
        <NavLink
          className="outlet hover:bg-gray-700 p-2"
          to={`/movie/${id}/overview`}
        >
          GENEL BAKIŞ
        </NavLink>
        <NavLink
          className="outlet  hover:bg-gray-700 p-2"
          to={`/movie/${id}/trailers`}
        >
          FRAGMANLAR
        </NavLink>
        <NavLink
          className="outlet  hover:bg-gray-700 p-2"
          to={`/movie/${id}/similar`}
        >
          ÖNERİLER
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DetailMovie;
