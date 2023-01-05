import React, { useEffect, useState } from "react";
import Router from "./Router";
import Loader from "./components/loader/Loader";

const Fetch = () => {
  const [test, setTest] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTest(true);
    }, 2000);
  }, []);

  return test ? <Router /> : <Loader />;
};

export default Fetch;
