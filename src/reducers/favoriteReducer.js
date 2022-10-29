import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from "../actionTypes/favoriteTypes";

const favoriteList = [];

const favoriteReducer = (state = favoriteList, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE: {
      const product = action.payload;

      const isProductExist = state.find((item) => item.id === product.id);

      if (isProductExist) {
        return state;
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

    case REMOVE_FROM_FAVORITE:
      const product = action.payload;

      const isProductExistDel = state.find((item) => item.id === product.id);

      if (isProductExistDel.amount === 1) {
        return state.filter((item) => item.id !== isProductExistDel.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount - 1 } : item
        );
      }

    default: {
      return state;
    }
  }
};

export default favoriteReducer;
