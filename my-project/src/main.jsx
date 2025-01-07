import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Tugas3/tugas3.jsx";
import LoginTemplate from "./MT4 - Atomic design/Layout/loginTemplate.jsx";
import RegistTemplate from "./MT4 - Atomic design/Layout/registTemplate.jsx";
import CobaNumber from "./MT8 - UseState/cobaNumber.jsx";
import Barang from "./MT8 - UseState/cobaArray.jsx";
import {
  Counter,
  LoginStatus,
  SimpleCalculator,
} from "./MT8 - UseState/tugas8.jsx";
import SimpleName from "./MT9 - UseState/array.jsx";
import UpdateStateWithMap from "./MT9 - UseState/map.jsx";
import Card from "./MT9 - UseState/tugas1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    < Card/>
  </StrictMode>
);
