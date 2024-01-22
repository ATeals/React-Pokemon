import React from "react";
import ReactDOM from "react-dom/client";

import { QueryPovider } from "./feature/provider";
import App from "./App.tsx";

import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryPovider>
      <App />
    </QueryPovider>
  </React.StrictMode>
);
