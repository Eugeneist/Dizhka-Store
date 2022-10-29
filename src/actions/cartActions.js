import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
} from "../actionTypes/cartTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const deleteFromCart = (product) => {
  return {
    type: DELETE_FROM_CART,
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
