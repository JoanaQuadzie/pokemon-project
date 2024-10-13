export const BASE_URL = 'https://pokeapi.co/api/v2'


export async function getPokemonList(pagination) {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${pagination.limit}&offset=${pagination.offset}`)
    const pokemonList = await response.json();
    return pokemonList;
};

export async function getPokemon({ url }) {
    const response = await fetch(url);
    const pokemon = await response.json()
    return pokemon
}
