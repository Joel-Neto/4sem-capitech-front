import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Sobre from "./page";

describe("Sobre", () => {
  it("renders a heading", () => {
    render(<Sobre />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("renders text 'Sobre nós'", () => {
    render(<Sobre />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toHaveTextContent("Sobre nós");
  });

  it("renders five images", () => {
    render(<Sobre />);

    const sections = screen.getAllByRole("img");

    expect(sections).toHaveLength(5);
  });
});
