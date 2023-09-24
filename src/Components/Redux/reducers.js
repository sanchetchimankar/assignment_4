import { CREATE_USER, CREATE_USER } from "./actions";

const initialState = {
  GridApp: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      const updatedGridApp = state.GridApp.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      return {
        ...state,
        GridApp: updatedGridApp,
      };
    case CREATE_USER:
      const newGridApp = [...state.GridApp, action.payload];
      return {
        ...state,
        GridApp: newGridApp,
      };
    default:
      return state;
  }
};

export default rootReducer;
