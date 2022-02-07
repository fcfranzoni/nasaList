import React from "react";
import { Link } from "react-router-dom";
import * as Styles from "./styles";

const Home = () => {
  return (
    <Styles.Container>
      <a href="/nasa">Nasa</a>
    </Styles.Container>
  );
};

export default Home;
