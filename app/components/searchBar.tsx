"use client";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter, useSearchParams } from "next/navigation";

const GET_POKEMON = gql`
  query GetPokemon($name: String) {
    pokemon(name: $name) {
      name
      image
      number
      types
    }
  }
`;

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pokemonName = searchParams.get("pokemon") || "";
  const [search, setSearch] = useState<string>(pokemonName || "");

  useEffect(() => {
    setSearch(pokemonName);
  }, [pokemonName]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (search) {
      router.push(`/?pokemon=${search}`);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <Input
          placeholder="Enter Pokémon name"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          className="w-64"
        />
        <Button type="submit" className="hover:cursor-pointer">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
