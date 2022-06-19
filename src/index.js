import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./pages/App/App";
import JSTasksPage from "./pages/JSTasksPage";
import PHPTasksPage from "./pages/PHPTasksPage";
import ReactJSTasksPage from "./pages/ReactJSTasksPage";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="js" element={<JSTasksPage />} />
        <Route path="php" element={<PHPTasksPage />} />
        <Route path="react" element={<ReactJSTasksPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
