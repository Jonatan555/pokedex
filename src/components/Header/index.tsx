import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style";
import pokemonLogo from "../../assets/pokemon-logo.png";
import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
  inputSearch: string;
};

export function Header() {
   const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    navigate(`/search?q=${data.inputSearch}`);
    reset();
  };

  return (
    <Container>
      <Link to={"/"}>
        <img src={pokemonLogo} alt="logo com texto pokemon" />
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="inputSearch" className="srOnly">
            pesquisar pokemon
          </label>
          <input
            type="text"
            id="inputSearch"
            placeholder="Pesquisar  Pokémon"
            {...register("inputSearch", {
              required: "Preencha o nome do Pokémon",
            })}
          />
          <span className="InputError">{errors.inputSearch?.message}</span>
        </section>
        <button type="submit">Pesquisar</button>
      </form>
    </Container>
  );
}
