import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
// Components
import App from "./App";
import { fetchPosts, loadStories } from "./features/slice/blog";

store.dispatch(fetchPosts());
store.dispatch(loadStories());

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster />
  </BrowserRouter>
);
