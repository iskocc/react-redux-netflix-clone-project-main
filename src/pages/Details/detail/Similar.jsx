import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseImageUrl } from "../../../utils/constans";

const Similar = () => {
  const { movie } = useSelector((store) => store.movie);

  const similar = movie.recommendations.results;

  return (
    <div className="max-w-[800px] mt-10 drop-shadow-[0_0_80px_rgba(255,255,255,0.4)]">
      <Splide options={{ gap: "10px", pagination: false, autoWidth: true }}>
        {similar?.map((movie) => (
          <SplideSlide>
            <a href={`/movie/${movie.id}`}>
              <div className="w-[100px] lg:w-[200px]">
                <img
                  className="rounded-md"
                  src={baseImageUrl + movie.poster_path}
                  alt=""
                />
              </div>
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Similar;
