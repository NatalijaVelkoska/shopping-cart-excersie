import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import cartItems from "../data";

//Create context
export const GlobalContext = createContext({});

//Provider component
export default function GlobalProvider({ children }) {
  const initialState = {
    items: [],
    loading: true,
    total: 0,
    totalPrice: 0,
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const getPosts = async () => {
    dispatch({ type: "START_FETCH" });
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: "FINISHED_FETCH" });
    dispatch({ type: "SET_POSTS", payload: data });
  };

  //Actions
  //   function addAllItems(m) {
  //     dispatch({ type: "START_REQUEST" });
  //     dispatch({
  //       type: "SET_DATA",
  //       payload: m,
  //     });
  //     dispatch({ type: "FINISH_REQUEST" });
  //   }

  const url = "https://course-api.com/react-useReducer-cart-project";

  const fetchData = async () => {
    dispatch({ type: "START_REQUEST" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  function incrementAmount(id) {
    dispatch({
      type: "INCREASE_AMOUNT",
      payload: id,
    });
  }

  function decrmentAmount(id) {
    dispatch({
      type: "DECREASE_AMOUNT",
      payload: id,
    });
  }

  function removeItem(id) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  }

  function clearCart() {
    dispatch({
      type: "CLEAR",
    });
  }

  useEffect(() => {
    dispatch({ type: "TOTAL_AMOUNT" });
  }, [state.items]);

  useEffect(() => {
    dispatch({ type: "TOTAL_PRICE" });
  }, [state.items]);

  return (
    <GlobalContext.Provider
      value={{
        items: state.items,
        loading: state.loading,
        fetchData,
        incrementAmount: incrementAmount,
        decrmentAmount: decrmentAmount,
        removeItem: removeItem,
        total: state.total,
        totalPrice: state.totalPrice,
        clearCart: clearCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
