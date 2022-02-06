import api from "./../../../config/request";

export const getNasaInfo = async (
  date1: string | undefined,
  date2: string | undefined
) => {
  debugger;

  return await api.get(
    "feed?start_date=" + date1 + "&end_date=" + date2 + "&api_key=DEMO_KEY"
  );
};
