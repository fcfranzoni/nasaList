import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBr from "date-fns/locale/pt-BR";
import { useNasa } from "../../../../context";
import { getNasaInfo } from "../../service";

function NasaDatePicker() {
  const { handleSetData } = useNasa();
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  const handleChange = (date: [Date | null, Date | null], e: any) => {
    setDateRange(date);
    debugger;
    if (date[1]?.getDate) {
      getNasaInfo(
        date[0]?.toLocaleDateString("sv-SE"),
        date[1].toLocaleDateString("sv-SE")
      )
        .then((response) => {
          debugger;
          handleSetData(response.data);
        })
        .catch((err) => {
          debugger;
          console.error(err.message);
        });
    }
  };

  return (
    <DatePicker
      selectsRange={true}
      dateFormat="dd/MM/yyyy"
      startDate={startDate}
      endDate={endDate}
      locale={ptBr}
      monthsShown={2}
      onChange={handleChange}
      placeholderText="Selecione a data Inicial e Final"
      withPortal
    />
  );
}

export default NasaDatePicker;
