import { render } from "@testing-library/react";
import Nasa from "..";
import { useNasa } from "../../../context";
import nasaMock from "../../../mock";
jest.mock("../../../context");

describe("Nasa Components", () => {
  it("should be able to render an Home", () => {
    (useNasa as unknown as jest.Mock).mockReturnValue({
      datas: nasaMock.data,
      handleSetData: jest.fn(),
    });

    expect(render(<Nasa />));
  });
});
