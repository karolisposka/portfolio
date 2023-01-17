import React, { useState } from "react";
import App from "./pages/App";
import { MainPageData } from "./context";
import Project from "./pages/Project";
import Fetch from "./fetch";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ZoomedImage from "./pages/ZoomedImage";

const Router: React.FunctionComponent = () => {
  const [data, setData] = useState<string[] | null>(null);
  const [bio, setBio] = useState();
  return (
    <BrowserRouter>
      <MainPageData.Provider value={[data, bio, setBio, setData]}>
        <Routes>
          <Route path="" element={<Fetch />}>
            <Route path="/" element={<App />} />
            <Route path="/:id" element={<Project />}>
              <Route path="/:id/fullsize/uploads/:image" element={<ZoomedImage />} />
            </Route>
          </Route>
        </Routes>
      </MainPageData.Provider>
    </BrowserRouter>
  );
};

export default Router;
