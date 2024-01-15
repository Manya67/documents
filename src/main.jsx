import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BackGround from "./components/BackGround";
import ForeGround from "./components/ForeGround";

const App = () => {
  return (
    <div className="h-screen w-full relative bg-zinc-900">
      <ForeGround />
      <BackGround />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
