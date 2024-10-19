import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainComponent from "./Component/MainComponent";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>
);
