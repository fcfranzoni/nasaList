import { useState, useEffect, useContext } from "react";
import { getNasaInfo } from "./service/";
import { useNasa } from "../../context";
import nasaMock from "./mock";
import ListNasa from "./components/List";

const Nasa = () => {
  const [datas, setDatas]: any = useState({});
  const { neoClicked } = useNasa();

  useEffect(() => {
    console.log(nasaMock.data);
    setDatas(nasaMock.data);
    // getNasaInfo()
    //   .then((response) => {
    //     setDatas(response.data);
    //   })
    //   .catch((err) => {
    //     debugger;
    //     console.error(err.message);
    //   });
  }, []);

  useEffect(() => {
    console.log(neoClicked);
  }, [neoClicked]);

  if (Object.keys(datas).length > 0) {
    const { near_earth_objects }: any = datas;
    const ObjToArray = Object.entries(near_earth_objects).map((x) => {
      return x;
    });

    return <ListNasa list={ObjToArray} />;
  } else return "No data";
};

export default Nasa;
