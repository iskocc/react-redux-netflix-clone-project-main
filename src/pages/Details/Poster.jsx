import React, { useState } from "react";
import { baseImageUrl } from "../../utils/constans";
import { FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../../redux/ActionTypes";

const Poster = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { movie } = useSelector((store) => store.movie);

  const dispatch = useDispatch();

  const video = movie.videos.results;

  return (
    <div className="  min-w-[50%] max-w-[400px] ps-10 max-md:ps-1  max-lg:mx-auto drop-shadow-[0_0_80px_rgba(255,255,255,0.4)]">
      <div className="relative">
        <img
          className="max-lg:hidden"
          src={baseImageUrl + movie.poster_path}
          alt=""
        />
        <img
          className="lg:hidden"
          src={baseImageUrl + movie.backdrop_path}
          alt=""
        />

        <button
          onClick={() => dispatch({ type: ActionTypes.MODAL_OPEN })}
          onMouseOver={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
          className="bg-red-600 px-4 py-2 flex items-center gap-3 absolute bottom-8 right-[-20px] max-lg:bottom-[10%] max-md:bottom-[8%] max-md:py-1 max-md:px-3"
        >
          <span className="py-2 play-icon">
            <FaPlay size={20} />
          </span>
          <span className={`play-text ${isMouseOver ? "slide-out" : ""}`}>
            Oynat
          </span>
        </button>
      </div>
    </div>
  );
};

export default Poster;
