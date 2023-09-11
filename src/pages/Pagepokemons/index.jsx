import React, { useEffect, useState } from "react";
import "../Pagepokemons/style.css";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonDetailByUrl } from "../Api";

const PagePokemons = () => {
  const navigate = useNavigate();
  const id = useParams();

  const [Pokemondata,setpokemondata]=useState([])

  console.log(id.id);

  useEffect(() => {
    const delladoPokemon = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon/"+id.id;
        const response = await getPokemonDetailByUrl(url);

        const data = response;

       

        setpokemondata(data)
        // setPokemon(data);
        // setPokemonCopy(data);
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
      // setIsLoading(true);
    };
    delladoPokemon();
  },[]);

  

  const volver = () => {
    navigate("/pokedex");
  };


 
  return (
    <div>
      <h1 style={{ color: "white" }}>PokePokemons</h1>

<img src={Pokemondata.image}></img>

<h1>{Pokemondata.name}</h1>
      <button onClick={volver}>Volver</button>
    </div>
  );
};

export default PagePokemons;
