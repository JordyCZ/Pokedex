import React, { useEffect, useState } from "react";
import { PokemonContext } from "./Context";

const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllpokemons] = useState([]);

  const getPokemons = async (limit = 5, offset = 0) => {
    const BaseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset${offset}`;
    const Response = await fetch(BaseUrl);
    const data = await Response.json();
    const response2 = data.results.map(async (pokemo) => {
      const data = await fetch(pokemo.url);
      const listsPokemons = data.json();
      return listsPokemons;
    });
    setAllpokemons(await Promise.all(response2));
  };
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ allPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
