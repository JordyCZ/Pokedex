import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import { getPokemonList } from "./Api";

function Navbar() {
  const [Pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useState(() => {
    const fetchedPokemon = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon?Limit=20";
        const fetchPokemon = [];
        const response = await getPokemonList(url);

        const data = response.array;
        console.log(data);
        setPokemon(data);
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
      setIsLoading(true);
    };
    fetchedPokemon();
  }, []);
  return (
    <nav className="header navbar nav">
      <ul>
        {Pokemon.map((item) => (
          <>
            <li>
              <img className="foto-pi" src={item.image}></img>
            </li>
          </>
        ))}
      </ul>
      <ul>
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/pokedex">Pokedex</Link>{" "}
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
