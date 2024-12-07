import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactiveButton from "reactive-button";
import { toggleWatchList } from "../redux/actions";

const Button = ({ color, movie }) => {
  const [state, setState] = useState("idle");
  const dispatch = useDispatch();

  const { favorite } = useSelector((store) => store.watchList);
  const isFav = favorite.find((i) => i.id === movie.id);

  const onClickHandler = () => {
    setState("loading");
    dispatch(toggleWatchList(movie, isFav ? false : true));
    // send an HTTP request
    setTimeout(() => {
      setState("success");
    }, 2500);
  };

  return (
    <ReactiveButton
      buttonState={state}
      idleText={isFav ? "Listeden Çıkar" : "Listeye Ekle"}
      loadingText={"Bekleyin.."}
      successText={isFav ? "Eklendi" : "Çıkartıldı"}
      onClick={onClickHandler}
      color={color}
    />
  );
};

export default Button;
