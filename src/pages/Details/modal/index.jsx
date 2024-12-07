import React from "react";

import { useDispatch } from "react-redux";
import ActionTypes from "../../../redux/ActionTypes";
import { IoMdClose } from "react-icons/io";

const VideoModal = ({ video }) => {
  const dispatch = useDispatch();
  const videokey = video[0]?.key;

  return (
    <div className=" sticky bottom-64   w-[400px] h-[240px] lg:w-[800px] lg:h-[450px]  mx-auto z-10 p-5">
      <button
        className="absolute top-0 right-0 bg-black bg-opacity-50 rounded-full p-2"
        onClick={() => dispatch({ type: ActionTypes.MODAL_CLOSE })}
      >
        <IoMdClose size={30} />
      </button>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videokey}?si=w88KDDEcllWWQThS`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoModal;
