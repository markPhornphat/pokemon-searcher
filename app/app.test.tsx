import "@testing-library/jest-dom";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import SearchBar from "./components/searchBar";
import PokemonResult from "./components/pokemonResult";
import Card from "./components/ui/card";
import fetch from "cross-fetch";
import client from "./lib/apolloClient";
global.fetch = fetch; //Allow ApolloClient to fetch

// Mock the App Router Hooks
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  useSearchParams: () => ({
    get: () => "",
  }),
}));

function renderWithApollo(ui: React.ReactElement) {
  return render(<ApolloProvider client={client}>{ui}</ApolloProvider>);
}

//Clean up mounted DOM every executing test done
afterEach(() => {
  cleanup();
});

describe("Test rendering of component", () => {
  beforeEach(() => {
    render(<SearchBar />);
  });

  test("Search Button Rendering", () => {
    const searchButton = screen.getByTestId("search-button");
    expect(searchButton).toBeInTheDocument();
  });

  test("Search field Rendering", () => {
    const searchField = screen.getByTestId("search-field");
    expect(searchField).toBeInTheDocument();
  });
});

describe("Input pokemon in search field", () => {
  beforeEach(() => {
    render(<SearchBar />);
    renderWithApollo(<PokemonResult />);
  });

  //To test each Pokemon with their type
  test.each([
    {
      name: "Bulbasaur",
      types: ["Poison", "Grass"],
    },
    {
      name: "Charmander",
      types: ["Fire"],
    },
    {
      name: "Squirtle",
      types: ["Water"],
    },
  ])("Input %s and see result", async ({ name, types }) => {
    const input = screen.getByTestId("search-field");
    const searchButton = screen.getByTestId("search-button");

    fireEvent.change(input, { target: { value: name } });
    fireEvent.click(searchButton);

    for (const type of types) {
      const typeElements = await screen.findAllByText(type);
      expect(typeElements.length).toBeGreaterThan(0);
    }
  });
});
