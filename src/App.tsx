import "./App.css";

import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Home from "./pages/Home";
import Price from "./pages/Price";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  )
}