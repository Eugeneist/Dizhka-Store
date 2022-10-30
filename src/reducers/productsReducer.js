import { ADD_TO_PRODUCTS } from "../actionTypes/productsTypes";

const productsList = [];

const productsReducer = (state = productsList, action) => {
  switch (action.type) {
    case ADD_TO_PRODUCTS: {
      const data = action.payload;

      return [...data];
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;
