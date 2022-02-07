import { render } from "@testing-library/react";
import Home from "../../Home";

describe("Nasa Components", () => {
  it("should be able to render an Home", () => {
    expect(render(<Home />));
  });
});
