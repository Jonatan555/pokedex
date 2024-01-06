import { useQuery } from "@tanstack/react-query";
import { API } from "../configs/api";

export function useQueryPokemonPage() {
  async function getPokemonPage() {
    const { data } = await API.get("/pokemon");

    const pokemonPromises = data.results.map(
      async (pokemon: { url: string }) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      }
    );

    const pokemondata = await Promise.all(pokemonPromises);

    console.log(pokemondata);

    return pokemondata;
  }

  const query = useQuery({
    queryKey: ["getPokemonPage"],
    queryFn: getPokemonPage,
  });

  return { ...query };
}
