import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import App from "./../../App";
import mapAppSlice from "./root";

const rootReducer = combineReducers({
  map_app: mapAppSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
