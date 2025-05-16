type PageProps = {
  params: {
    pokemonName: string;
  };
};

function PokemonNamePage({ params }: PageProps) {
  return <div>Pokemon {params.pokemonName}</div>;
}

export default PokemonNamePage;
