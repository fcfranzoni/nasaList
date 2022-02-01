import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../containers/home";
import Nasa from "../containers/listNasa";
import { NasaProvider } from "../context";

const ExportRoutes = () => (
  <BrowserRouter>
    <NasaProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nasa" element={<Nasa />} />
      </Routes>
    </NasaProvider>
  </BrowserRouter>
);

export default ExportRoutes;
