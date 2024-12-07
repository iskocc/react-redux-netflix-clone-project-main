import ActionTypes from "../ActionTypes";

const initialState = {
  movie: [],
  isLoading: true,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MOVIE_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.MOVIE_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ActionTypes.MOVIE_SUCCESS:
      return { isLoading: false, error: null, movie: action.payload };
    default:
      return state;
  }
};
export default movieReducer;
