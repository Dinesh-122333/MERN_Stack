import React from 'react';

export default function PokemonList({ pokemon }) {//pokemon in a props for this component
  return (
    <div>
      {pokemon.map(p => (
        <div key={p}>{p}</div>//we need to give key because 
      ))}
    </div>
  );
}
