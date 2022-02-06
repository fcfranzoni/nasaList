import { useState, useEffect } from "react";
// import { getNasaInfo } from "./service";
import { useNasa } from "../../context";
import nasaMock from "./mock";

import ListNasa from "./components/List";
import LoadingView from "./components/LoadingView";
import FormNasa from "./components/Form";

import * as Styles from "./styles";

const Nasa = () => {
  const { datas } = useNasa();

  // const { data } = nasaMock;

  // let datas = data;
  // debugger;

  if (Object.keys(datas).length > 0) {
    const { near_earth_objects }: any = datas;
    const ObjToArray = Object.entries(near_earth_objects)
      .map((x) => {
        return x;
      })
      .sort((a: any, b: any) => {
        return new Date(a[0]).getDate() - new Date(b[0]).getDate();
      });

    return (
      <>
        <Styles.Container>
          <FormNasa />
        </Styles.Container>
        <Styles.Container>
          <ListNasa list={ObjToArray} />
        </Styles.Container>
      </>
    );
  } else
    return (
      <Styles.Container>
        <FormNasa />
        <LoadingView> Carregando </LoadingView>
      </Styles.Container>
    );
};

export default Nasa;
