import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Poster from "./Poster";
import DetailMovie from "./DetailMovie";
import VideoModal from "./modal";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../redux/actions";

const Detail = () => {
  // const [movie, setMovie] = useState(null);
  // const [error, setError] = useState(null);
  const { modal } = useSelector((store) => store.modal);
  const { isLoading, error, movie } = useSelector((store) => store.movie);
  const dispatch = useDispatch();

  const { id } = useParams();
  // useEffect(() => {
  //   const params = {
  //     append_to_response: "credits,videos",
  //     language: "tr",
  //   };
  //   api
  //     .get(`/movie/${id}`, { params })
  //     .then((res) => setMovie(res.data))
  //     .catch((err) => setError(err.message));
  // }, []);

  useEffect(() => {
    dispatch(getMovie(id));
  }, []);

  if (error) return <Error msg={error} />;
  if (isLoading) return <Loader />;
  return (
    <div className="relative">
      <div className="grid grid-cols-[1fr_2fr] max-lg:grid-cols-1 gap-5">
        <Poster />
        <DetailMovie movie={movie} />
      </div>
      {modal && <VideoModal video={movie.videos.results} />}
    </div>
  );
};

export default Detail;
