import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../containers/Home";
import Nasa from "../containers/Nasa";
import { NasaProvider } from "../context";
import Header from "../components/Header";
import GlobalStyle from "../styles/global";
import Notifications from "react-notify-toast";

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
    <Notifications />
  </BrowserRouter>
);

export default ExportRoutes;
