import React, { useState, useEffect } from "react";
import Navigation from "./components/navigation/Navigation";
import Section from "./components/section/Section";
import Hero from "./components/hero/Hero";
import Title from "./components/title/Title";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import Container from "./components/Container/Container";

function App() {
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
        {mobileMenuStatus && <MobileMenu />}
        <Section visability={portfolioVisible} setVisability={setPortfolioVisable} id="portfolio">
          <Title
            title="projects"
            subtitle="Here you will find some of the personal projects that I created with each project containing its own case study"
          />
        </Section>
        <Section visability={aboutVisible} setVisability={setAboutVisiable} id="about">
          <Title
            title="About me"
            subtitle="Here you will find some of the personal projects that I created with each project containing its own case study"
          />
        </Section>
      </Container>
    </div>
  );
}

export default App;
