import { getPokemon, BASE_URL } from "../utils/api";
import { useLoaderData } from "react-router-dom";

export async function getPokemonDetailsLoader({ params }) {
  const pokemon = await getPokemon({ url: `${BASE_URL}/pokemon/${params.id}` });
  return { pokemon };
}

export default function PokemonDetailsPage() {
  const { pokemon } = useLoaderData();

  console.log("pokemon det", pokemon);

  return (
    <section className="flex justify-center">
      <div className="max-w-lg">
        <img
          src={pokemon.sprites.front_default}
          className="text-center h-63 w-64 mx-auto"
        />

        <h1 className="capitalize text-center text-2xl mb-5">{pokemon.name}</h1>

        <div className="px-10">
          <h2 className="text-lg font-bold mb-2">Species</h2>
          <p className="text-lg mb-4 capitalize">{pokemon.species.name}</p>
          <h2 className="text-lg font-bold">Base Stats</h2>
          <div className="mb-4 mt-3 grid grid-cols-3">
            {pokemon.stats.map(({ stat, base_stat }) => (
              <div
                key={stat.name}
                className="flex flex-col justify-center bg-gray-200 px-2 py-1 shadow w-3/4 text-center rounded-lg mb-3"
              >
                <p className="text-sm font-bold capitalize">{stat.name}</p>
                <p className="text-lg mt-2 text-gray-800">{base_stat}</p>
              </div>
            ))}
          </div>
          <h2 className="text-lg font-bold mb-3">Types</h2>
          <div className="flex flex-wrap mb-4">
            {pokemon.types.map(({ type }) => (
              <span
                key={type.name}
                className="mr-3 mb-5 text-sm bg-gray-200 text-black px-3 py-1 rounded-full text-center capitalize"
              >
                {type.name}
              </span>
            ))}
          </div>
          <h2 className="text-lg font-bold">Weight</h2>
          <p className="text-lg mb-4">{pokemon.weight} lbs</p>
          <h2 className="text-lg font-bold mb-3">Moves</h2>
          <div className="flex flex-wrap mb-4">
            {pokemon.moves.map(({ move }) => (
              <span
                key={move.name}
                className="mr-3 mb-5 text-sm bg-gray-200 text-black px-3 py-1 rounded-full text-center capitalize"
              >
                {move.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
