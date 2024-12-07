import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../utils/api";
import Error from "../../../components/Error";
import Loader from "../../../components/Loader";

import ActorList from "./ActorList";
import { useSelector } from "react-redux";

const OverView = () => {
  const { id } = useParams();
  const { isLoading, error, movie } = useSelector((store) => store.movie);
  // const [movie, setMovie] = useState(null);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   const params = {
  //     append_to_response: "credits,recommendations,external_ids",
  //     language: "tr",
  //   };
  //   api
  //     .get(`/movie/${id}`, { params })
  //     .then((res) => setMovie(res.data))
  //     .catch((err) => setError(err.message));
  // }, []);
  if (isLoading) return <Loader />;
  if (error) return <Error msg={error} />;

  return (
    <div className="mt-5 flex flex-col max-w-full">
      <p className="text-gray-200 text-sm max-md:text-[10px] ">
        {movie.overview}
      </p>
      <div className="mt-5 max-md:gap-1 max-md:text-sm">
        <p>
          <span className="text-gray-500">Etiket: </span>
          <span className="max-md:text-[10px]">{movie.tagline}</span>
        </p>
        <p className="flex items-center gap-3 my-5 flex-wrap">
          <span className="text-gray-500">Yapımcılar:</span>
          {movie.production_companies.map((i, key) => (
            <span
              key={key}
              className="whitespace-nowrap text-sm max-md:text-[10px]"
            >
              {i.name + ","}
            </span>
          ))}
        </p>
        <p className="flex items-center gap-2 flex-wrap ">
          <span className="text-gray-500">Kategoriler:</span>
          {movie.genres &&
            movie.genres.map((i, key) => (
              <span key={key} className="text-sm max-md:text-[10px]">
                {i.name + ","}
              </span>
            ))}
        </p>
      </div>
      <div className="max-w-[800px] drop-shadow-[0_0_80px_rgba(255,255,255,0.4)]">
        <ActorList actors={movie.credits.cast} />
      </div>
    </div>
  );
};

export default OverView;
