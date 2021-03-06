import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Search } from "./Search";

const error = "There is nothing here";

describe("Search", () => {
  it("search for character", () => {
    const onSearchChange = jest.fn();
    const onSearchEmpty = jest.fn();

    const { getByPlaceholderText } = render(
      <Search
        onSearchChange={onSearchChange}
        onSearchEmpty={onSearchEmpty}
        error={null}
      />
    );
    const input = getByPlaceholderText("Busca un personaje");
    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "Morty" } });
    expect(input.value).toBe("Morty");
    fireEvent.click(screen.getByText("Buscar"));
    expect(screen.getByText("Resultados para")).toBeVisible();
  });

  it("when call onClick if character exist", () => {
    const onSearchChange = jest.fn();
    const onSearchEmpty = jest.fn();

    const { getByPlaceholderText } = render(
      <Search
        onSearchChange={onSearchChange}
        onSearchEmpty={onSearchEmpty}
        error={null}
      />
    );
    const input = getByPlaceholderText("Busca un personaje");

    fireEvent.change(input, { target: { value: "Morty" } });
    fireEvent.click(screen.getByText("Buscar"));
    expect(input.value).toBe("Morty");

    expect(screen.getByText("Resultados para")).toBeVisible();
    expect(onSearchChange).toHaveBeenCalledTimes(1);
  });

  it("when call onSearchEmpty if character is empty", () => {
    const onSearchChange = jest.fn();
    const onSearchEmpty = jest.fn();

    const { getByPlaceholderText } = render(
      <Search
        onSearchChange={onSearchChange}
        onSearchEmpty={onSearchEmpty}
        error={null}
      />
    );
    const input = getByPlaceholderText("Busca un personaje");
    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "" } });
    expect(input.value).toBe("");

    expect(onSearchEmpty).toHaveBeenCalledTimes(1);
  });

  it("search for characters not found", () => {
    const { getByPlaceholderText } = render(
      <Search
        onSearchChange={jest.fn()}
        onSearchEmpty={jest.fn()}
        error={error}
      />
    );
    const input = getByPlaceholderText("Busca un personaje");
    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "Morti" } });
    expect(input.value).toBe("Morti");
    fireEvent.click(screen.getByText("Buscar"));
    expect(
      screen.getByText("There is nothing here - Intenta de nuevo")
    ).toBeVisible();
  });
});
