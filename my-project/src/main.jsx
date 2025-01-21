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
import StatusBar, { SaveButton } from "./MT11 - CustomHooks/coba2.jsx";
import GantiTheme from "./MT11 - CustomHooks/soal1.jsx";
import StatusTask from "./MT11 - CustomHooks/soal2.jsx";
import Router from "./MT12 - ReactRouter/soal1/soal1.jsx";
import Explore from "./MT12 - ReactRouter/explore/coba.jsx";
import CobaAxios from "./MT13 - Axios/cobaAxios.jsx";
import CobaAxios2 from "./MT13 - Axios/soal1.jsx";
import AxiosMap from "./MT13 - Axios/soal1map.jsx";
import AxiosCard from "./MT14 - DynamicRouter/soal2/soal2.jsx";
import CobaUseParams from "./MT14 - DynamicRouter/coba.jsx";
import BookVerse from "./MT14 - DynamicRouter/soal1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AxiosCard />
  </StrictMode>
);
