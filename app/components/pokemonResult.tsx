"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { usePokemon } from "../hooks/usePokemon";
import { useAllPokemon } from "../hooks/useAllPokemon";
import Card from "./ui/card";

const PokemonResult = () => {
  const searchParams = useSearchParams();
  const pokemonName = searchParams.get("pokemon") || "";
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const {
    pokemon: selectedPokemon,
    loading: loadingOne,
    error: errorOne,
  } = usePokemon(pokemonName);

  const {
    pokemons: allPokemon,
    loading: loadingAll,
    error: errorAll,
  } = useAllPokemon(1000);

  //Handle loading
  useEffect(() => {
    if (loadingAll || loadingOne) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [loadingAll, loadingOne]);

  //Handle data
  useEffect(() => {
    if (allPokemon && selectedPokemon) {
      const result = allPokemon.filter((p: pokemonType) =>
        p.name.toLowerCase().includes(pokemonName.toLowerCase())
      );
      setData(result);
    } else if (!selectedPokemon && allPokemon) {
      setData(allPokemon);
    }
  }, [allPokemon, selectedPokemon]);

  if (isLoading) return <div>Loading...</div>;
  //   if (pokemonName) {
  //     if (error || !pokemon) {
  //       return <div>Not found</div>;
  //     }
  //   }

  return (
    <div
      className={`grid gap-6 auto-rows-fr ${
        data.length === 1 ? "grid-cols-1 place-items-center" : "grid-cols-3"
      }`}
    >
      {data.map((p: pokemonType) => (
        <Card key={p.id} props={p} />
      ))}
    </div>
  );
};

export default PokemonResult;
