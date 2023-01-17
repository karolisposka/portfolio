import React, { useState, useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import Loader from "../components/loader/Loader";
import SingleProject from "../components/SingleProject/SingleProject";
import TagsList from "../components/tagsList/TagsList";
import Title from "../components/title/Title";
import Paragraph from "../components/paragrapth/Paragraph";
import Button from "../components/scrollBtn/ScrollBtn";
import Carsousel from "../components/carousel/Carsousel";

const Project: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>();
  const { id } = useParams();

  const fetchData = async () => {
    const base = process.env.REACT_APP_BASE_URL;
    try {
      const response = await fetch(`${base}/api/projects/${id}/?populate=*`);
      const data = await response.json();
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <SingleProject>
          <Button type="link" to={-1} text="back" />
          <Title title={data.attributes.title} />

          <Carsousel
            images={data.attributes.carousel}
            handleZoom={(image) => {
              navigate(`/${id}/fullsize${image}`);
            }}
          />
          <div>
            <Paragraph text={data.attributes.description} title="Description" />
            <TagsList style={{ margin: "2rem" }} title="Key technologies" tags={data.attributes.teches.data} />
            <div style={{ display: "flex", margin: "2rem" }}>
              {data.attributes.links.data[0].attributes.live && (
                <Button type="button" to={data.attributes.links.data[0].attributes.live} text="Live" />
              )}
              {data.attributes.links.data[0].attributes.github && (
                <Button type="button" to={data.attributes.links.data[0].attributes.github} text="Github" />
              )}
            </div>
          </div>
          <Outlet />
        </SingleProject>
      )}
    </>
  );
};

export default Project;
