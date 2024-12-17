import React from "react";
import ReactDOM from "react-dom/client";
import TodosProvider from "./components/TodoList/TodosProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>
);
