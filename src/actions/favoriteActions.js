import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from "../actionTypes/favoriteTypes";

export const addToFavorite = (product) => {
  return {
    type: ADD_TO_FAVORITE,
    payload: product,
  };
};

export const removeFromFavorite = (product) => {
  return {
    type: REMOVE_FROM_FAVORITE,
    payload: product,
  };
};
