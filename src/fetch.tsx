import React, { useEffect, useContext } from "react";
import { MainPageData } from "./context";
import { Outlet } from "react-router-dom";

import Loader from "./components/loader/Loader";

const Fetch = () => {
  const [data, setBio, setData] = useContext(MainPageData);
  const base = process.env.REACT_APP_BASE_URL;

  const fetchData = async () => {
    try {
      const res = await fetch(`${base}/api/bios/?populate=teches`);
      const response = await fetch(`${base}/api/projects/?populate=thumbnail`);
      const bio = await res.json();

      setBio(bio.data);

      const data = await response.json();

      setData(data.data);
    } catch (err) {
      console.log("Oops! Something wrong with server. Please try again later");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data ? <Outlet /> : <Loader />;
};

export default Fetch;
