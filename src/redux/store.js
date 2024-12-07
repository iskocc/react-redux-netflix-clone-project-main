import { applyMiddleware, combineReducers, createStore } from "redux";
import genreReducer from "./reducer/genreReducer";
import { thunk } from "redux-thunk";
import modalReducer from "./reducer/modalReducer";
import movieReducer from "./reducer/movieReducer";
import favoritesReducer from "./reducer/favoritesReducer";

const rootReducer = combineReducers({
  genres: genreReducer,
  modal: modalReducer,
  movie: movieReducer,
  watchList: favoritesReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
