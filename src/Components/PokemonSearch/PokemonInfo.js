import React from "react";

 const  PokemonInfo = ({ pokemon }) =>{
  return ( 
      <>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Type</th>
          <th>HP</th>
          <th>Attack</th>
          <th>Deffense</th>
          <th>Speed</th>
          <th>Weight</th>
        </tr>
        {pokemon.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>
              <img src={item.img} alt="" />
            </td>
            <td>{item.type}</td>
            <td>{item.hp}</td>
            <td>{item.attack}</td>
            <td>{item.defense}</td>
            <td>{item.speed}</td>
            <td>{item.weight}</td>
          </tr>
        ))}
      </tbody>
   </>
  );
}

export default PokemonInfo