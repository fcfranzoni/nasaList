import React from "react";
import { Link } from "react-router-dom";
import * as Styles from "./styles";

const Home = () => {
  return (
    <Styles.Container>
      <Link to="/nasa">Nasa</Link>
    </Styles.Container>
  );
};

export default Home;
