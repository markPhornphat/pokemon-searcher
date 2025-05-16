import Link from "next/link";
import React from "react";
import SearchBar from "./components/searchBar";

const Home = () => {
  const pokemonName = "Babursur";
  return (
    <div>
      <SearchBar />

      <Link href={`/products/${pokemonName}`}>Go to pokemon</Link>
    </div>
  );
};

export default Home;
