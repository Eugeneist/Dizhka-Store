import { ADD_TO_PRODUCTS } from "../actionTypes/productsTypes";

export const addToProducts = (data) => {
  return {
    type: ADD_TO_PRODUCTS,
    payload: data,
  };
};
