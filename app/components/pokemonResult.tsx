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

  if (isLoading)
    return (
      <div className="grid grid-cols-3 gap-6 auto-rows-fr">
        {Array.from({ length: 9 }).map((_) => (
          <CardSkeleton />
        ))}
      </div>
      // <div className="flex-1 flex flex-col justify-center items-center gap-1 ">
      //   <Image alt="loading" width={40} height={40} src={"/loading.svg"} />
      //   Loading...
      // </div>
    );
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
