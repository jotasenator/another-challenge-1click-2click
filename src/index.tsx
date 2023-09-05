import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AnimalProvider } from "../src/context/animalContext/animalContext";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AnimalProvider>
      <App />
    </AnimalProvider>
  </React.StrictMode>
);
