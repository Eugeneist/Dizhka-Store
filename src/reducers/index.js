import cartReducer from "./cartReducer";
import favoriteReducer from "./favoriteReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartReducer,
  favoriteReducer,
});

export default rootReducer;
