import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { baseImageUrl } from "../../../utils/constans";

const ActorList = ({ actors }) => {
  return (
    <div>
      <h2 className="font-semibold text-lg mt-5 max-md:text-sm">Oyuncular</h2>
      <Splide
        options={{
          autoWidth: true,
          gap: "5px",
          pagination: false,
        }}
      >
        {actors.map((actor) => (
          <SplideSlide key={actor.id}>
            <div className="w-[120px] max-md:w-[80px] relative">
              <img
                className="rounded-md"
                src={actor.profile_path && baseImageUrl + actor.profile_path}
                alt=""
              />
              <p className="absolute bg-black w-full bg-opacity-50 bottom-0 text-sm max-md:text-[8px]">
                {actor.original_name}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ActorList;
