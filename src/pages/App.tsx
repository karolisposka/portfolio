import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Section from "../components/section/Section";
import Hero from "../components/hero/Hero";
import Title from "../components/title/Title";
import MobileMenu from "../components/mobileMenu/MobileMenu";
import Container from "../components/Container/Container";
import ProjectsCard from "../components/project/ProjectsCard";
import TagsList from "../components/tagsList/TagsList";
import Paragraph from "../components/paragrapth/Paragraph";

const tags: string[] = [
  "HTML",
  "CSS",
  "styled-components",
  "react",
  "redux",
  "typescript",
  "Formik",
  "redux-persist",
  "NodeJS",
  "mySql",
  "MongoDB",
];

const App: React.FunctionComponent = () => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState<boolean>(false);
  const [windowPosition, setWindowPosition] = useState<number | undefined>();
  const [positionOpenedMenu, setPositionOpenedMenu] = useState<number | undefined>();
  const [aboutVisible, setAboutVisiable] = useState<boolean>(false);
  const [portfolioVisible, setPortfolioVisable] = useState<boolean>(false);

  const updatePosition = () => {
    if (mobileMenuStatus) {
      setPositionOpenedMenu(window.scrollY);
    }
  };

  //function updates window scroll location while mobile menu is open

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, [window.scrollY]);

  // function changes mobileMenu state if window has scrolled

  useEffect(() => {
    if (positionOpenedMenu !== windowPosition) {
      setMobileMenuStatus(false);
    }
  }, [positionOpenedMenu]);

  const handleBurgetClick = () => {
    setWindowPosition(window.scrollY);
    setMobileMenuStatus(!mobileMenuStatus);
  };

  return (
    <div className="App">
      <Navigation
        handleClick={() => {
          handleBurgetClick();
        }}
      />
      <Container>
        <Hero id="hero" />
        <MobileMenu status={mobileMenuStatus} />
        <Section visability={portfolioVisible} setVisability={setPortfolioVisable} id="portfolio">
          <Title
            title="projects"
            subtitle="Here you will find some of the personal projects that I created with each project containing its own case study"
          />
          <ProjectsCard
            test={portfolioVisible}
            to="1"
            image={require("../assets/thumbnail_kanban.png")}
            title="Kanban board"
            text="Here you will find some of the personal projects that I created with each project containing its own case study"
          />
          <ProjectsCard
            test={portfolioVisible}
            to="1"
            image={require("../assets/thumbnail_feedback.png")}
            title="Feedback App"
            text="Here you will find some of the personal projects that I created with each project containing its own case study"
          />
          <ProjectsCard
            test={portfolioVisible}
            to="1"
            image={require("../assets/thumbnail_flags.png")}
            title="Flags Application"
            text="Here you will find some of the personal projects that I created with each project containing its own case study"
          />
          <ProjectsCard
            test={portfolioVisible}
            to="1"
            image={require("../assets/thumbnail_food.png")}
            title="E-Commerce"
            text="Here you will find some of the personal projects that I created with each project containing its own case study"
          />
        </Section>
        <Section visability={aboutVisible} setVisability={setAboutVisiable} id="about">
          <Title
            title="About me"
            subtitle="Here you will find some of the personal projects that I created with each project containing its own case study"
          />
          <div style={{ display: "flex" }}>
            <Paragraph
              title="My Story"
              text="My path in front-end engineering started one year ago in CodeAcademy courses, where I got to know with
                basics of Javascript. Since graduation I'm expanding my skill set by creating full-stack NodeJS
                applications by integrating Redux, Typescript, React and other modern frameworks. Projects can be found
                in Github Profile. My dedication to code and desire to learn something new on daily basis would be a
                great fit for your company. I welcome an opportunity to speak with you if you fell I would be strong
                candidate for this or any other position in your company."
            />
            <TagsList title="Skill set" tags={tags} />
          </div>
        </Section>
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
