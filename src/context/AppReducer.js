export default (state, { type, payload }) => {
  switch (type) {
    case "SET_DATA":
      return { ...state, items: [...payload] };

    case "INCREASE_AMOUNT":
      let tempCart = state.items.map((cartItem) => {
        if (cartItem.id === payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, items: tempCart };

    case "DECREASE_AMOUNT":
      let tempCart1 = state.items
        .map((cartItem) => {
          if (cartItem.id === payload) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return { ...state, items: tempCart1 };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id != payload),
      };

    case "START_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FINISH_REQUEST":
      return {
        ...state,
        loading: false,
      };

    case "DISPLAY_ITEMS":
      return { ...state, items: payload, loading: false };

    case "START_FETCH":
      return { ...state, loading: true };

    case "FINISHED_FETCH":
      return { ...state, loading: false };

    case "SET_POSTS":
      return { ...state, blogPosts: payload };

    case "TOTAL_AMOUNT":
      let total = state.items.reduce(
        (prevValue, currentValue) => prevValue + currentValue.amount,
        0
      );
      console.log("total", total);
      return { ...state, total };

    case "TOTAL_PRICE":
      let totalPrice = state.items.reduce(
        (prevValue, currentValue) =>
          prevValue + parseFloat(currentValue.price) * currentValue.amount,
        0
      );
      return { ...state, totalPrice };

    case "CLEAR":
      return { ...state, items: [] };

    default:
      return state;
  }
};
