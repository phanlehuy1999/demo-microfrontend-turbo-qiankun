import "zone.js";
import { registerMicroApps, start } from "qiankun";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

registerMicroApps([
  {
    name: "angularApp",
    entry: "//localhost:4200",
    container: "#container",
    activeRule: "/app-angular",
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

start();
