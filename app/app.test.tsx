import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import SearchBar from "./components/searchBar";

// Mock the App Router Hooks
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  useSearchParams: () => ({
    get: () => "",
  }),
}));

afterEach(() => {
  cleanup();
});

describe("Search component", () => {
  beforeEach(() => {
    render(<SearchBar />);
  });

  test("Button Rendering", () => {
    const searchButton = screen.getByTestId("search-button");
    expect(searchButton).toBeInTheDocument();
  });
});
