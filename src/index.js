import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { DataSourceProvider } from "./context/Source.Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataSourceProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataSourceProvider>
);
