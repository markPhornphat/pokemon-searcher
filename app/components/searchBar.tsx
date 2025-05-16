"use client";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
  const [name, setName] = useState<string>("");
  const [searchName, setSearchName] = useState("");

  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { name: searchName },
    skip: !searchName, // only run when searchName is set
  });

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchName(name);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Pokémon Search</h1>
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <Input
          placeholder="Enter Pokémon name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className="w-64"
        />
        <Button type="submit" className="hover:pointer">
          Search
        </Button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading Pokémon.</p>}
      {data?.pokemon && (
        <div>
          <h2>{data.pokemon.name}</h2>
          <img src={data.pokemon.image} alt={data.pokemon.name} />
          <p>Types: {data.pokemon.types.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
