import React, { useState } from "react";

export default function PokemonCard(props) {
  const { pokemon } = props;

  return (
    <article className="border w-full shadow flex flex-col justify-center items-center rounded-md">
      <img src={pokemon.sprites.front_default} width={150} height={150} />
      <p className="my-4 text-center font-bold ">{pokemon.name}</p>
    </article>
  );
}