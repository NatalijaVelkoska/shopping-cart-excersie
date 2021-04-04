import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import data from "../data.js";
import Item from "./Item";

export const ItemList = () => {
  const { items, loading, fetchData, clearCart } = useContext(GlobalContext);

  useEffect(() => {
    fetchData(data);
  }, []);

  console.log(items);

  return (
    <div>
      <div>
        {items.length === 0 ? (
          <div>No items in the cart...</div>
        ) : (
          items.map((item) => <Item item={item} key={item.id} />)
        )}
      </div>
      <button onClick={() => clearCart()}>CLEAR ALL</button>
    </div>
  );
};

//   return (
//     <div>
//       {items.map((item) => (
//         <Item item={item} key={item.id} />
//       ))}
//     </div>
//   );
// };
