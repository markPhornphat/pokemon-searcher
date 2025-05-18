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
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6 items-center">
        {pokemonName ? (
          <button
            onClick={() => router.push(`/`)}
            className="flex items-center gap-2 text-gray-700 hover:text-black bg-gray-100 rounded-full p-1 hover:cursor-pointer "
          >
            {/* SVG from image style */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
        ) : null}
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
