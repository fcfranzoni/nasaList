import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ExportRoutes from "./routes/routes";

const rootElement = document.getElementById("root");
render(<ExportRoutes />, rootElement);
