import api from "./../../../config/request";

export const getNasaInfo = async () => {
    return await api.get(
    "feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY"
  );
};
