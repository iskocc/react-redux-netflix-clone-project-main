import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { useSelector } from "react-redux";
import { baseImageUrl } from "./../../../utils/constans";

const Trailers = () => {
  const { movie } = useSelector((store) => store.movie);

  const posters = movie.posters;
  const videos = movie.videos.results;

  if (videos.length === 0)
    return posters?.map((poster, key) => (
      <SplideSlide>
        <img
          className="w-[640px] max-lg:w-[480px] h-[360px]"
          key={key}
          src={baseImageUrl + poster.file_path}
        ></img>
      </SplideSlide>
    ));

  return (
    <div>
      <div className="w-[640px] max-lg:w-[480px] max-lg:mx-auto my-10 drop-shadow-[0_0_80px_rgba(255,255,255,0.4)]">
        <Splide options={{ gap: "5px", pagination: false }}>
          {videos?.map((video) => (
            <SplideSlide>
              <iframe
                className="w-[640px] max-lg:w-[480px] h-[360px]"
                key={video.id}
                src={`https://www.youtube.com/embed/${video.key}?si=w88KDDEcllWWQThS`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Trailers;
