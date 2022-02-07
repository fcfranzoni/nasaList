import { render } from "@testing-library/react";
import React, { useState as useStateMock } from "react";
import { mount, shallow } from "enzyme";
import NasaDatePicker from "../components/DateRangePicker";
import "../../../jest.config";

describe("NasaDatePicker Components", () => {
  
   it("should be able to render an NasaDatePicker", () => {
     expect(render(<NasaDatePicker />));
   });
});
