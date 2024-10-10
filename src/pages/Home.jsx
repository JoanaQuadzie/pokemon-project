import React from "react";
import PokemonList from "../components/PokemonList";

const HomePage = () => {
  return (
    <section>
      <h1 className="text-2xl font-serif p-14 text-center">
        The Pokédex contains detailed stats for every creature from the Pokemon
        games
      </h1>

      <section className="flex justify-center">
        <div className="md:max-w-screen-md">
          <PokemonList />
        </div>
      </section>
    </section>
  );
};

export default HomePage;
