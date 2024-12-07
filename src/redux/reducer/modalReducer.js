import ActionTypes from "../ActionTypes";

const initialState = {
  modal: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MODAL_OPEN:
      return {
        modal: true,
      };
    case ActionTypes.MODAL_CLOSE:
      return {
        modal: false,
      };
    default:
      return state;
  }
};
export default modalReducer;
