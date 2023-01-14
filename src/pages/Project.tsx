import React, { useState, useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import Loader from "../components/loader/Loader";
import SingleProject from "../components/SingleProject/SingleProject";
import TagsList from "../components/tagsList/TagsList";
import Title from "../components/title/Title";
import Carsousel from "../components/carousel/Carsousel";

const Project: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const { id } = useParams();

  const fetchData = async () => {
    const base = process.env.REACT_APP_BASE_URL;
    try {
      const response = await fetch(`${base}/api/projects/${id}/?populate=carousel`);
      const data = await response.json();
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const techs: string[] = ["CSS", "HTML", "REACT", "MONGODB", "NODEJS"];

  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <SingleProject>
          <Title title="Kanban Board" subtitle="Project number one" />
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%", height: "400px" }}>
              <Carsousel
                images={data}
                handleZoom={(image) => {
                  navigate(`/${id}/fullsize${image}`);
                }}
              />
            </div>
            <div style={{ marginLeft: "2rem" }}>
              <TagsList title="Key technologies" tags={techs} />
            </div>
          </div>
          <Outlet />
        </SingleProject>
      )}
    </>
  );
};

export default Project;
