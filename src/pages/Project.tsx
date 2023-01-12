import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import Loader from "../components/loader/Loader";
import SingleProject from "../components/SingleProject/SingleProject";
import TagsList from "../components/tagsList/TagsList";
import Carsousel from "../components/carousel/Carsousel";

const Project: React.FunctionComponent = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  const fetchData = async () => {
    const base = process.env.REACT_APP_BASE_URL;
    try {
      const response = await fetch(`${base}/api/projects/${id}/?populate=carousel`);
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const techs: string[] = ["CSS", "HTML", "REACT", "MONGODB", "NODEJS"];
  const images: string[] = ["../assets/kanban2.png"];
  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <SingleProject>
          <Carsousel images={images} />
          <TagsList title="key techs" tags={techs} />
        </SingleProject>
      )}
    </>
  );
};

export default Project;
