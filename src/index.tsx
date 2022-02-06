import React from 'react';
import { render } from "react-dom";
import ExportRoutes from "./routes/routes";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <ExportRoutes />
  </React.StrictMode>,
  rootElement
);
