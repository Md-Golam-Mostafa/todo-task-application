import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

const initialState = {
  status: "All",
  colors: [],
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLORCHANGED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter((c) => c !== color),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default filtersReducer;
