import React, { useState } from "react";
import App from "./pages/App";
import { MainPageData } from "./context";
import Project from "./pages/Project";
import Fetch from "./fetch";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const Router: React.FunctionComponent = () => {
  const [data, setData] = useState<string[] | null>(null);
  return (
    <BrowserRouter>
      <MainPageData.Provider value={[data, setData]}>
        <Routes>
          <Route path="" element={<Fetch />}>
            <Route path="/" element={<App />} />
            <Route path="/:id" element={<Project />} />
          </Route>
        </Routes>
      </MainPageData.Provider>
    </BrowserRouter>
  );
};

export default Router;
