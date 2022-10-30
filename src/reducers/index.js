import cartReducer from "./cartReducer";
import favoriteReducer from "./favoriteReducer";
import productsReducer from "./productsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartReducer,
  favoriteReducer,
  productsReducer,
});

export default rootReducer;
