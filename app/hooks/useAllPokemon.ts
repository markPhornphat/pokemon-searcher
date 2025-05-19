"use client";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_POKEMON = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      evolutions {
        id
        name
        types
      }
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      types
      image
    }
  }
`;

export function useAllPokemon(first: number) {
  const { data, loading, error } = useQuery(GET_ALL_POKEMON, {
    variables: { first },
    skip: !first,
  });

  return {
    pokemons: data?.pokemons,
    loading,
    error,
  };
}
