import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import PokemonInfo from "./PokemonInfo";

export default function Search() {
  const [pokemonName, setPokemonName] = useState();
  const [pokemon, setPokemon] = useState([]);
  const [wrongPokemonChosen, setWrongPokemonChosen] = useState(false);

  const handleChange = (event) => {
    setPokemonName(event.target.value);
  };

  const getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon([
          {
            name: pokemonName,
            img: response.data.sprites.front_default,
            type: response.data.types[0].type.name,
            hp: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
            speed: response.data.stats[5].base_stat,
            weight: response.data.weight,
          },
        ]);
        setWrongPokemonChosen(true)
      })
      .catch((error) => {
        if (error.response) {
          setWrongPokemonChosen(false)
        }
      });
  };

  return (
    <div className="container">
      <div className="Pokemon-Title">
        <h1> Pokemon Game </h1>
      </div>
      <div className="Pokemon-Section">
        <input
          type="text"
          value={pokemonName}
          placeholder="Pokemon Name"
          onChange={handleChange}
        />
        <button disabled={!pokemonName} onClick={getPokemon}>
          Search Pokemon
        </button>
        <div className="PokemonInfo">
          { !(wrongPokemonChosen ) ? (<h1>Please select Pokemon</h1>) : (<PokemonInfo pokemon={pokemon} />)  }
        </div>
     </div>
     
    </div>
    
  );
}
