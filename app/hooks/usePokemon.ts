"use client";
import { gql, useQuery } from "@apollo/client";

const GET_POKEMON = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      name
      image
      number
      types
    }
  }
`;

export function usePokemon(name: string, id?: string) {
  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { name, id },
    skip: !name, // skip query if no name provided
  });

  return {
    pokemon: data?.pokemon,
    loading,
    error,
  };
}
