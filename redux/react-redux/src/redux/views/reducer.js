import { ADD_VIEW } from "./types";

const initialState = {
  count: 0,
};

const viewsReducer = (state, action) => {
  switch (action.type) {
    case ADD_VIEW:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default viewsReducer;
