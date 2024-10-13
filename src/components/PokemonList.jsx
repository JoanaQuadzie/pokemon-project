import React, { useState, useEffect } from "react";
import { getPokemonList, getPokemon } from "../utils/api";
import PokemonCard from "./PokemonCard";
import ReactPaginate from "react-paginate";

const ITEMS_PER_PAGE = 20;

export default function PokemonList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pokemon, setPokemon] = useState({});
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    setLoading(true);
    getPokemonList({ limit: ITEMS_PER_PAGE, offset: 0 })
      .then(async (data) => {
        setPokemon(data);
        const pokemons = await Promise.all(data.results.map(getPokemon));
        setPokemonList(pokemons);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops! Something went wrong. Try again.</p>;
  }

  if (pokemonList.length === 0) {
    return <p>No pokemons available.</p>;
  }

  const handlePageClick = ({ selected }) => {
    const newOffset = selected * ITEMS_PER_PAGE;
    setLoading(true);
    getPokemonList({ limit: ITEMS_PER_PAGE, offset: newOffset })
      .then(async (data) => {
        setPokemon(data);
        const pokemons = await Promise.all(data.results.map(getPokemon));
        setPokemonList(pokemons);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-4 ">
        {pokemonList.map((pokemon) => (
          <div key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>

      <div className="py-6">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pokemon.count / 20}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="inline-flex -space-x-px"
          pageLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          previousLinkClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          nextLinkClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          breakLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
          activeClassName="border-indigo-500 text-indigo-600"
          activeLinkClassName="border-indigo-500 text-indigo-600"
          pageClassName="relative hidden sm:inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          previousClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          nextClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          breakClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
          disabledClassName="opacity-25 cursor-not-allowed"
        />
      </div>
    </div>
  );
}
