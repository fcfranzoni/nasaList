import { useState, useEffect } from "react";
import { getNasaInfo } from "./service/";

const Nasa = () => {
  const [datas, setDatas]: any = useState([]);

  useEffect(() => {
    getNasaInfo("feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY").then((response) => {
      setDatas(response.data);
    });
  }, []);


  if (!datas || datas.length === undefined) {
    return (
      <div style={{ maxWidth: 900, padding: 30 }}>
        Dados: {datas && <h1>{JSON.parse(datas)}</h1>}
      </div>
    );
  } else return "No data";
};

export default Nasa;
