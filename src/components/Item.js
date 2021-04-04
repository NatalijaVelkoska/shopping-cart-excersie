import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Item({ item }) {
  const { incrementAmount, decrmentAmount, removeItem } = useContext(
    GlobalContext
  );

  return (
    <div>
      <h1>{item.title}</h1>
      <h2>{item.price}</h2>
      {console.log(item.id)}
      <button onClick={() => removeItem(item.id)}>Remove</button>
      <button onClick={() => incrementAmount(item.id)}>+</button>
      <button onClick={() => decrmentAmount(item.id)}>-</button>
      <h3>{item.amount}</h3>
    </div>
  );
}
