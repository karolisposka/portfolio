import React from "react";
import App from "./pages/App";
import Project from "./pages/Project";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const Router: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
