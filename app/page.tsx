import React from "react";
import SearchBar from "./components/searchBar";
import PokemonResult from "./components/pokemonResult";
import { Suspense } from "react";

const Home = () => {
  return (
    <Suspense>
      <div className="min-h-screen gap-2 bg-gradient-to-b from-gray-100 to-gray-300 p-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">Pokémon Search</h1>
        <SearchBar />
        <PokemonResult />
      </div>
    </Suspense>
  );
};

export default Home;
