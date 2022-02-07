import { render } from "@testing-library/react";
import FormNasa from "../components/Form";

describe("Nasa Components", () => {
  it("should be able to render an NasaDatePicker", () => {
    expect(render(<FormNasa />));
  });
});
