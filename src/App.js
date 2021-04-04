import "./App.css";
import Nav from "./components/Nav";
import { ItemList } from "./components/ItemList";
import GlobalProvider from "./context/GlobalState";
import Cart from "./components/Cart";
import { GlobalContext } from "./context/GlobalState";
import React, { useContext } from "react";

function App() {
  const { loading } = useContext(GlobalContext);
  return (
    <GlobalProvider>
      {!loading ? (
        <div className="App">
          <Nav />
          <Cart />
          <ItemList />
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </GlobalProvider>
  );
}

export default App;
