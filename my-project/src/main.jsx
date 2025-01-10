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
import Card from "./MT9 - UseState/soalgambar.jsx";
import Counter2 from "./MT10 - UseEffect/soal1.jsx";
import CounterLogger from "./MT10 - UseEffect/soal2.jsx";
import CounterNoEffect from "./MT10 - UseEffect/coba1.jsx";
import CounterWithEffect from "./MT10 - UseEffect/coba2.jsx";
import TextLogger from "./MT10 - UseEffect/soal3.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TextLogger />
  </StrictMode>
);
