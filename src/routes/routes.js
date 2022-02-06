import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../containers/Home";
import Nasa from "../containers/Nasa";
import { NasaProvider } from "../context";
import Header from "../components/Header";
import GlobalStyle from "../styles/global";


const ExportRoutes = () => (
  <BrowserRouter>
    <NasaProvider>
    <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nasa" element={<Nasa />} />
      </Routes>
    </NasaProvider>
  </BrowserRouter>
);

export default ExportRoutes;
