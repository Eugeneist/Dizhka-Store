import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
} from "../actionTypes/cartTypes";

const cart = [];

const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;

      const isProductExist = state.find((item) => item.id === product.id);

      if (isProductExist) {
        return state.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            amount: 1,
          },
        ];
      }
    }

    case REMOVE_FROM_CART: {
      const product = action.payload;

      const isProductExistDel = state.find((item) => item.id === product.id);

      if (isProductExistDel.amount === 1) {
        return state.filter((item) => item.id !== isProductExistDel.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount - 1 } : item
        );
      }
    }

    case DELETE_FROM_CART:
      {
        const product = action.payload;

        const isProductExistDel = state.find((item) => item.id === product.id);

        if (isProductExistDel) {
          return state.filter((item) => item.id !== isProductExistDel.id);
        }
      }
      break;

    case CLEAR_CART: {
      return (state = []);
    }

    default: {
      return state;
    }
  }
};

export default cartReducer;
