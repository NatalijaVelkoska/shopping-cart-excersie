import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import { GlobalContext } from "../context/GlobalState";

export default function Cart() {
  const element = <FontAwesomeIcon icon={faShoppingBasket} />;
  const { total, totalPrice } = useContext(GlobalContext);

  return (
    <div>
      <h1>{element}</h1>
      <h1 style={{ color: "lightblue" }}>{total}</h1>
      <h1 style={{ color: "yellow" }}>${totalPrice}</h1>
    </div>
  );
}
