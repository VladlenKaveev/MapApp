import React from "react";
import Navigation from "./modules/navigation";
import { Provider } from "react-redux";
import { store } from "../src/modules/authentication/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
