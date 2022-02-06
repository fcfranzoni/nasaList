import { useState } from "react";
import { useNasa } from "../../../../context";
import NasaDatePicker from "../DateRangePicker";

function FormNasa() {
  return (
      <div>
        <label>Selecione a Data Inicial e Final</label>
        <NasaDatePicker />
      </div>
  );
}

export default FormNasa;
