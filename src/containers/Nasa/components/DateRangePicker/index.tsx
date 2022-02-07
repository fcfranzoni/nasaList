import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBr from "date-fns/locale/pt-BR";
import { useNasa } from "../../../../context";
import { getNasaInfo } from "../../service";
import { calculateDates } from "../../../../helpers";

function NasaDatePicker() {
  const { handleSetData } = useNasa();
  const [dateRange, setDateRange] = useState<[any, any]>([null, null]);
  const [startDate, endDate] = dateRange;

  function handleChange(date: [Date, Date]) {
    setDateRange(date);

    if (date[1].getDate() && calculateDates(date[0]!, date[1]!)) {
      getNasaInfo({ inititalDate: date[0], endDate: date[1] })
        .then((response) => {
          handleSetData(response.data);
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
  }

  return (
    <DatePicker
      selectsRange={true}
      dateFormat="dd/MM/yyyy"
      startDate={startDate}
      endDate={endDate}
      locale={ptBr}
      monthsShown={2}
      onChange={handleChange}
      withPortal
    />
  );
}

export default NasaDatePicker;
