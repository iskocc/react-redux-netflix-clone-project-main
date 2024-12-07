import ActionTypes from "../ActionTypes";

const initialState = {
  favorite: [],
  isLoading: true,
  error: null,
};

const favoritesReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case ActionTypes.WATCHLIST_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.WATCHLIST_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case ActionTypes.WATCHLIST_SUCCESS:
      return { isLoading: false, error: null, favorite: action.payload };
    case ActionTypes.WATCHLIST_ADD:
      const updated = state.favorite.concat(action.payload);
      return { ...state, favorite: updated };
    case ActionTypes.WATCHLIST_REMOVE:
      const deleted = state.favorite.filter((i) => i.id !== action.payload.id);
      return { ...state, favorite: deleted };
    default:
      return state;
  }
};
export default favoritesReducer;
