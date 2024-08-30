import React from "react";
import { Provider } from "react-redux";
import store from "./store"; // Adjust the path to your store
import Listings from "./Listings";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Listings />
      </div>
    </Provider>
  );
}

export default App;
