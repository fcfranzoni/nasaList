import moment from "moment";
import { notify } from "react-notify-toast";

export const formateDate = "YYYY-MM-DD";
export const calculateDates = (firtDate: Date, secondDate: Date) => {
  if (
    moment.duration(moment(firtDate).diff(moment(secondDate))).asDays() * -1 >
    7
  ) {
    notify.show(
      "O Periodo para buscar tem que ser menor que 7 dias",
      "warning",
      5000
    );
    return false;
  }

  return true;
};
