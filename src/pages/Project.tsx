import React from "react";
import Container from "../components/Container/Container";
import SingleProject from "../components/SingleProject/SingleProject";
import TagsList from "../components/tagsList/TagsList";
import Carsousel from "../components/carousel/Carsousel";

const Project: React.FunctionComponent = () => {
  const techs: string[] = ["CSS", "HTML", "REACT", "MONGODB", "NODEJS"];
  const images: string[] = ["../assets/kanban2.png"];
  return (
    <SingleProject>
      <Carsousel images={images} />
      <TagsList title="key techs" tags={techs} />
    </SingleProject>
  );
};

export default Project;
