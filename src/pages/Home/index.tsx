import { Container } from "./styles";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { PokemonCard } from "../../components PokemonCard";

export function Home() {
  const { data } = useQueryPokemonPage();
  console.log(data);

  return (
    <Container>
      <h1>{"Bem-vindo(a) a pokedex do reprograma Jucás"}</h1>

      <div className="gridCards">
        {data?.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} />;
        })}
      </div>
    </Container>
  );
}
