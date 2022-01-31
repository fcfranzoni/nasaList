import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../containers/home";
import Nasa from "../containers/listNasa";

const ExportRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="nasa" element={<Nasa />} />
    </Routes>
  </BrowserRouter>
);

export default ExportRoutes;
