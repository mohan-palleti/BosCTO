import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AddpetStore from "./Components/AddpetStore";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Petstore from "./Components/Petstore";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location}>
          <Route path="/" element={<Home />} />
          <Route path="/listing/:id" element={<Petstore />} />
          <Route path="/listing/create" element={<AddpetStore />} />
          <Route path="*" element={"not Found"} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
