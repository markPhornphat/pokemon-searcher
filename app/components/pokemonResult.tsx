"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { usePokemon } from "../hooks/usePokemon";
import Image from "next/image";
import { useAllPokemon } from "../hooks/useAllPokemon";
import Card from "./ui/card";
import CardSkeleton from "./cardSkeleton";

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

  //Handle loading
  if (isLoading)
    if (pokemonName) {
      return <CardSkeleton />;
    } else {
      return (
        <div className={`grid grid-cols-3 gap-6 auto-rows-fr`}>
          {Array.from({ length: 9 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      );
    }

  //Handle not found
  if (pokemonName) {
    if (errorOne || !selectedPokemon) {
      return (
        <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
            alt="Pokemon not found"
            width={120}
            height={120}
            className="opacity-50"
          />
          <h2 className="mt-4 text-2xl font-bold">Pokémon not found</h2>
          <p className="text-sm mt-2 text-gray-500">
            Try searching for another Pokémon name.
          </p>
        </div>
      );
    }
  }

  return (
    <div
      className={`sm:block sm:space-y-5 lg:grid gap-6  ${
        data.length === 1 ? "grid-cols-1 place-items-center" : `grid-cols-3`
      }`}
    >
      {data.map((p: pokemonType) => (
        <Card key={p.id} props={p} />
      ))}
    </div>
  );
};

export default PokemonResult;
