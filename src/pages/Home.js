import React, { useContext } from "react";
import { PokemonContext } from "../components/Context/Context";
import "../pages/style.css";

function Home() {
  const { allPokemons } = useContext(PokemonContext);

  return (
    <div className="prueba">
      {allPokemons.map((pokemons) => {
        return (
          <div className="contenedorIMG">
            <p>{pokemons.name}</p>
            <img
              className="foto"
              src={pokemons.sprites.other.home.front_default}
              alt="pokemon"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
