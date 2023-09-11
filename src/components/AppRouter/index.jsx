import React from "react";

import Home from "../../pages/Home";
import About from "../../pages/About";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../pages/Navbar";
import Pokedex from "../../pages/Pokedex";
import PagePokemons from "../../pages/Pagepokemons";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="PageEvolutions/:id" element={<PagePokemons />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
