import api from "./../../../config/request";
import moment from "moment";
import { formateDate } from "../../../helpers";

export const getNasaInfo = async (params: any) => {
  console.log(moment(params.inititalDate).format(formateDate))
  return await api.get("feed", {
    params: {
      start_date: moment(params.inititalDate).format(formateDate),
      end_date: moment(params.endDate).format(formateDate),
      api_key: "DEMO_KEY",
    },
  });
};
