import api from "../../utils/api";
import ActionTypes from "../ActionTypes";

export const getGenres = () => (dispatch) => {
  dispatch({ type: ActionTypes.GENRE_LOADING });

  api
    .get("/genre/movie/list", { params: { language: "tr-TR" } })
    .then((res) =>
      dispatch({ type: ActionTypes.GENRE_SUCCESS, payload: res.data.genres })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.GENRE_ERROR, payload: err.message })
    );
};
export const getMovie = (id) => (dispatch) => {
  dispatch({ type: ActionTypes.MOVIE_LOADING });
  const params = {
    append_to_response: "credits,recommendations,images,videos",
    language: "tr",
  };
  api
    .get(`/movie/${id}`, { params })
    .then((res) =>
      dispatch({ type: ActionTypes.MOVIE_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.MOVIE_ERROR, payload: err.message })
    );
};

export const toggleWatchList = (movie, isAdd) => (dispatch) => {
  api
    .post("/account/21500076/watchlist", {
      media_type: "movie",
      media_id: movie.id,
      watchlist: isAdd,
    })
    .then(() => {
      isAdd
        ? dispatch({ type: ActionTypes.WATCHLIST_ADD, payload: movie })
        : dispatch({ type: ActionTypes.WATCHLIST_REMOVE, payload: movie });
    })
    .catch((err) =>
      dispatch({ type: ActionTypes.WATCHLIST_ERROR, payload: err.message })
    );
};
export const getWatchList = () => (dispatch) => {
  dispatch({ type: ActionTypes.WATCHLIST_LOADING });
  api
    .get("/account/21500076/watchlist/movies", {
      language: "tr",
      sort_by: "created_at.asc",
    })
    .then((res) =>
      dispatch({
        type: ActionTypes.WATCHLIST_SUCCESS,
        payload: res.data.results,
      })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.WATCHLIST_ERROR, payload: err.message })
    );
};
