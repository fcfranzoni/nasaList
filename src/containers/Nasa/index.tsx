import { useState, useEffect } from "react";
// import { getNasaInfo } from "./service";
import { useNasa } from "../../context";
import nasaMock from "./mock";

import ListNasa from "./components/List";
import { LoadingView, WrapLoadingView } from "./components/LoadingView";
import FormNasa from "./components/Form";

import * as Styles from "./styles";

const Nasa = () => {
  const { datas } = useNasa();
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
        <Styles.WrapForm>
          <FormNasa />
        </Styles.WrapForm>
        <Styles.Container>
          <ListNasa list={ObjToArray} />
        </Styles.Container>
      </>
    );
  } else
    return (
      <>
        <Styles.WrapForm>
          <FormNasa />
        </Styles.WrapForm>

        <WrapLoadingView>
          <LoadingView> Carregando ... </LoadingView>
        </WrapLoadingView>
      </>
    );
};

export default Nasa;
