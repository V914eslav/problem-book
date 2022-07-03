import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Home from "../Home/Home";
import NotFoundPage from "../NotFoundPage";

import JSTasksPage from "../JSTasksPage";
import PHPTasksPage from "../PHPTasksPage";
import ReactJSTasksPage from "../ReactJSTasksPage";

import styles from "./App.module.css";

const App = () => {
  const arrayPages = [
    { name: "JSTasksPage", path: "js", element: <JSTasksPage /> },
    { name: "PHPTasksPage", path: "php", element: <PHPTasksPage /> },
    { name: "ReactJSTasksPage", path: "react", element: <ReactJSTasksPage /> },
  ];
  return (
    <div className={styles.app}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home arrayPages={arrayPages} />} />
          {arrayPages.map((obj) => (
            <Route key={obj.name} path={obj.path} element={obj.element} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer className={styles.footer} />
    </div>
  );
};
export default App;
