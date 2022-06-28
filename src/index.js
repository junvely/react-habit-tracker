import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.css";
// import App from "./app";
import SimpleHabit from "./components/simpleHabit-reactHook";
import "@fortawesome/fontawesome-free/js/all.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>
);
