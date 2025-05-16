"use client";
import { gql, useQuery } from "@apollo/client";

export function getPokemon(name: string) {
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

  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { name },
    skip: !name, // skip query if no name provided
  });

  return { data, loading, error };
}
